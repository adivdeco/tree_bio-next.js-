"use server"

import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { AvatarImage } from "@radix-ui/react-avatar"
import { userAgent } from "next/server"
import { availableMemory } from "process"
import { getAvilableUsernameSuggestions } from "../utils"
import { error } from "console"
import { use } from "react"


export async function checkProfileUsernameAvailability(username: string) {
    if (!username) return {
        available: false,
        suggesations: []
    }

    const user = await db.user.findUnique({
        where: {
            username: username
        }
    })
    if (!user) {
        return { available: true }
    }
    const suggesations = await getAvilableUsernameSuggestions(username, 3, 10)

    return {
        available: false,
        suggesations
    }
}

export const claimUsername = async (username: string) => {
    const loggedUser = await currentUser();

    if (!loggedUser) return {
        success: false, error: "Not authenticated"
    }

    const user = await db.user.update({
        where: {
            clerkId: loggedUser.id
        },
        data: {
            username: username
        }
    })
    if (!username)
        return {
            success: false, error: "Invalid username"
        }
}


export const getCurrentUsername = async () => {
    const user = await currentUser();


    const currentUsername = await db.user.findUnique({
        where: {
            clerkId: user?.id
        },
        select: {
            username: true,
            bio: true,
            // socialLinks: true
        }

    })
    return currentUsername
}