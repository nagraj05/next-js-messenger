import prisma from "@/app/libs/prismadb"
import getCurrentUser from "./getCurrentUser"

const getConversations = async () => {
    const currentUser = await getCurrentUser()

    if(!currentUser?.id){
        return[]
    }

    try{
        const conversations = await prisma.conversation.findMany({
            orderBy: {
                lassMessageAt: 'desc'
            }
        })
    } catch (error: any) {
        return[]
    }

}