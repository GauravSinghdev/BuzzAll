import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";
import { LuBird } from "react-icons/lu";


export default function Navbar() {
    return <header className="sticky top-0 z-10 bg-card shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-10 px-5 py-3">
            <Link href="/" className="text-3xl font-cascadia font-bold text-primary">
                
                <div className="flex items-center justify-center">
                    BuzzAll
                    <LuBird className="size-12"/>
                </div>
                
            </Link>
            <SearchField/>
            <UserButton className="sm:ms-auto"/>
        </div>
    </header>
}