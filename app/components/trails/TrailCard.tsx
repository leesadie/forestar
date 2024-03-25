'use client';

import useRouteTimes from "../../hooks/useRouteTimes";
import { Trail } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import Image from "next/image";
import { SafeTrail } from "@/app/types";

interface TrailCardProps {
    data: SafeTrail;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string 
}

const TrailCard: React.FC<TrailCardProps> = ({
    data,
    onAction,
    disabled,
    actionLabel,
    actionId = ''
}) => {
    const router = useRouter();

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onAction?.(actionId);
    }, [onAction, actionId, disabled]);

    return (
        <div
            onClick={() => router.push(`/trails/${data.id}`)}
            className="
                col-span-1 cursor-pointer group items-center justify-center
            "
        >
            <div className="
                flex 
                flex-col 
                gap-2
                ml-5
                mg-10
                sm:ml-5
                md:ml-0
                lg:ml-0
                xl:ml-0
                w-[320px]
                sm:w-full
                md:w-full
                lg:w-full
                xl:w-full
                "
            >
                <div
                    className="
                        aspect-square
                        w-full
                        relative
                        overflow-hidden
                        rounded-lg
                    "
                >
                    <Image 
                        fill
                        alt="Trail"
                        src={data.imageSrc}
                        className="
                            object-cover
                            h-full
                            w-full
                            group-hover:scale-110
                            transition
                        "
                    />
                </div>
                <div className="font-medium text-md lg:text-base text-lg">
                    {data.title}
                </div>
                <div className="font-normal text-neutral-700 lg:text-sm">
                    {data.description} — {data.address}
                </div>
            </div>
        </div>
    );
}

export default TrailCard;