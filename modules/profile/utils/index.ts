import { db } from "@/lib/db";



export async function getAvilableUsernameSuggestions(base: string, count = 3, maxTries = 10) {

    const suggesations: string[] = [];

    for (let i = 0; suggesations.length < count && i < maxTries; i++) {
        const candidate = `${base}${i}`;

        const exist = await db.user.findUnique({
            where: {
                username: candidate
            }
        })
        if (!exist) {
            suggesations.push(candidate);

        }
    }
    return suggesations;
}