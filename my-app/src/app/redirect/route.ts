import { NextResponse } from "next/server";
import { nanoid } from 'nanoid'
export function GET() {
    const page = nanoid()
    return NextResponse.redirect("https://frankwoodi-orange-space-yodel-6qwqj95rqwj34rrv-3000.preview.app.github.dev/" + page);
}




