import {NextRequest, NextResponse} from "next/server";
import {publish} from "@/logic/redis/pubsub";

export async function POST(req: NextRequest, res: NextResponse){
    const formData = await req.formData();
    const msg = formData.get('chat') as string
    publish(msg)
    return NextResponse.json({message: "success"})
}