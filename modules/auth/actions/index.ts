"use server"

import { currentUser } from "@clerk/nextjs/server"
import { db } from "@/lib/db"


export const onBordUser = async () => {

    try {
        const user = await currentUser()

        if (!user) {
            return {
                sucess: false,
                error: "no authenticated user found",
                message: "User not found"
            }
        }

        const { id, firstName, lastName, emailAddresses, imageUrl } = user
        // use upsert to create or update user

        const newUser = await db.user.upsert({
            where: {
                clerkId: id
            },
            update: {
                firstName: firstName || null,
                lastName: lastName || null,
                email: emailAddresses[0]?.emailAddress || "",
                imageUrl: imageUrl || null
            },
            create: {
                clerkId: id,
                firstName: firstName || null,
                lastName: lastName || null,
                email: emailAddresses[0]?.emailAddress || "",
                imageUrl: imageUrl || null
            }

        })
        return {
            sucess: true,
            user: newUser,
            message: "User created successfully"
        }

    } catch (error) {

        console.error("X Error onboarding user:", error);
        return {
            success: false,
            error: "Failed to onboard user",
        }


    }
}