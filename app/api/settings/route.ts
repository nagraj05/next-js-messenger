import { NextResponse } from "next/server"

export async function POST(
    request: Request
){
    try{

    }catch(error: any){
        console.log(error, 'ERRor_Settings')
        return new NextResponse('internal Error', {status: 500})
    }
}