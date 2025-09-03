"use server"


import { UserButton } from "@clerk/nextjs"


interface Props {
    showName?: boolean
}


export default async function UserControl({ showName }: Props) {
    return (
        <UserButton
            showName={showName}
        />
    )
}