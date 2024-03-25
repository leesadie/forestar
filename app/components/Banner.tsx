'use client';

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import ButtonHome from "./ButtonHome";

const Banner = () => {
    const router = useRouter();

    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                p-8
            "
        >
            <div className="relative w-full">
                <img 
                    src="/images/banner.jpg"
                    alt="Banner"
                    className="
                        contain
                        mt-20
                        rounded-lg
                        h-[180px]
                        sm:h-[400px]
                        lg:h-[500px]
                        xl:h-[600px]
                        2xl:h-[600px]
                        w-full
                        lg:px-10
                        filter brightness-75
                    "
                />
                <div 
                    className="
                        absolute
                        inset-0
                        mt-14
                        flex
                        flex-col
                        lg:gap-2
                        justify-center
                        items-center
                        place-content-center
                    "
                >
                    <p className="text-white text-2xl lg:text-4xl font-normal">
                        Let your senses wander
                    </p>
                    <ButtonHome 
                        label="Find a trail"
                        onClick={() => {}}
                        outline
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner;