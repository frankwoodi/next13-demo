
import { redirect } from "next/dist/server/api-utils"
import { PageProps as IPage} from "../../../.next/types/app/layout"
import { NextResponse } from "next/server"
import Link from "next/link"
import { buttonVariants } from "../../components/button"
interface PageProps extends IPage {
    params: {
        page: string
    }
}
function Page({params}: PageProps) {

    const handleRedirect = () => {

        // let res = NextResponse.redirect('/')
    }
    return (
        <main className="bg-background flex min-h-screen flex-col items-center gap-16 p-24">
        <h1 className='text-primary text-5xl'> Page </h1>
        <span>ID: {params.page}</span>
        <span> What a world </span>
        <Link
        href="/"
        className={buttonVariants()}
        >Go back</Link>
      </main>
    )
}

export default Page