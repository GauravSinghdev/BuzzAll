import { Metadata } from "next"
import loginImage from "@/assets/login-image.jpg"
import Image from "next/image"
import Link from "next/link"
import LogininFrom from "./LogInFrom"

export const metadata: Metadata = {
    title: "Login"
}

export default function Page() {
    return (
        <main className="flex h-screen items-center justify-center p-5 bg-gradient-to-r from-black via-green-500 to-black">
            <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl overflow-hidden bg-card shadow-2xl">
                <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
                    <h1 className="text-center text-3xl font-bold">Login to <span className="font-cascadia">BuzzAll</span></h1>
                    <div className="space-y-5">
                        <LogininFrom/>
                        <Link href="/signup" className="block text-center hover:underline">Don't have an account? Sign up</Link>
                    </div>
                </div>
                {/* <Image
                src={loginImage}
                alt=""
                className="hidden w-1/2 object-cover md:block"
                /> */}

                <img
                src="https://cdn.pixabay.com/photo/2024/08/14/22/15/ai-generated-8969777_640.jpg"
                alt=""
                className="hidden w-1/2 object-cover md:block"
                />
            </div>
        </main>
    )
}