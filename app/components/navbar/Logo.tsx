'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <div className="flex flex-row gap-2">
            <Image 
                onClick={() => router.push('/')}
                alt="Logo2"
                className="cursor-pointer ml-4 md:ml-0"
                height='20'
                width='20'
                src='images/logo2_final.svg'
            />
            <Image 
                onClick={() => router.push('/')}
                alt="Logo"
                className="cursor-pointer"
                height='80'
                width='80'
                src='/images/logo_final3.svg'
            />
        </div>
    )
}

export default Logo;