'use client';

import Image from "next/image";
import Heading from "../Heading";

interface TrailHeadProps {
    title: string;
    description: string;
    imageSrc: string;
    id: string;
    address: string;
}

const TrailHead: React.FC<TrailHeadProps> = ({
    title,
    description,
    imageSrc, 
    address,
    id
}) => {
    return (
        <>
            <Heading 
                title={title}
                subtitle={description}
            />
            <div
            className="
              lg:h-[40vh]
              h-[30vh]
              overflow-hidden
              rounded-lg
              relative
              mt-5
            "
          >
            <Image 
              src={imageSrc}
              fill
              alt="Image"
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col text-xl font-medium">
            {title}
            <div className=" flex flex-row text-sm md:text-lg font-normal">
              {description} —
              <div className="underline underline-offset-4 pl-2 text-neutral-700 text-sm md:text-base hover:opacity-60 cursor-pointer">
                {address}
              </div>
            </div>
          </div>
        </>
    );
}

export default TrailHead;