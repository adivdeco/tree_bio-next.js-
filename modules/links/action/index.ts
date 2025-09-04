"use server"

import { db } from "@/lib/db"
import { LinkFormData } from "../components/link-form";
import { currentUser } from "@clerk/nextjs/server"



export const createLinkByUser = async (data: LinkFormData) => {

    const user = await currentUser();

    if (!user)
        return { success: false, error: "You must be logged in to create a link" }

    const link = await db.link.create({
        data: {
            title: data.title,
            url: data.url,
            description: data.description,
            clickCount: 0,
            user: {
                connect: {
                    clerkId: user.id
                }
            }
        }
    })
    return {
        sucess: true,
        message: "Link created successfully",
        data: link
    }
}


export const getAllLinkForUser = async () => {
    const user = await currentUser();

    const links = await db.link.findMany({
        where: {
            user: {
                clerkId: user?.id
            }
        },
        select: {
            id: true,
            title: true,
            description: true,
            url: true,
            clickCount: true,
            createdAt: true,

        }
    });

    return {
        success: true,
        message: "Gets All Link successfully",
        data: links
    }
}


