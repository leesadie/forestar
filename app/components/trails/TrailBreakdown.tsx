'use client';

import Image from "next/image";

const TrailBreakdown = () => {
    return (
        <div className="flex flex-col gap-6 group overflow-hidden w-full rounded-lg aspect-square">
            <Image 
                alt="Program Breakdown"
                src='/images/breakdown_final.svg'
                height={600}
                width={600}
                className="rounded-lg object-cover group-hover:scale-110 transition cursor-pointer"
            />
            <div className="flex flex-row gap-1 mb-10">
                <Image
                    alt="marker"
                    src='/images/marker_final.svg'
                    height={20}
                    width={20}
                />
                <div className="font-normal"> - Interaction Points</div>
            </div>
        </div>
    );
}

export default TrailBreakdown;