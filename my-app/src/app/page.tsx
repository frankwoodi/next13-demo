import Image from 'next/image'
import Link from 'next/link'
import { NextResponse } from 'next/server'
import { Button, buttonVariants} from "../components/button"
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='color-primary text-5xl'> Hey </h1>
      <span> What a world </span>
      <div className="border-sm border-secondary px-5 py-5 ">
          <Link href="/redirect" className="mx-6">
            <Button>redirect</Button>
          </Link>
          <Link href="/todolist" className={buttonVariants()}>
            todolist
          </Link>
          <Link href="/links" className={buttonVariants()}>
            links
          </Link>
        </div>
    </main>
  )
}
