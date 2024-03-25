'use client';

import Image from "next/image";
import Heading from "../Heading";

const AboutHead = () => {
    return (
        <>
            <Heading 
                title="What is forest bathing?"
                subtitle="Explore the Japanese practice"
            />
            <div
            className="
              w-full
              h-[40vh]
              overflow-hidden
              rounded-xl
              relative
              mt-5
            "
          >
            <Image 
              src='/images/head_about.jpg'
              fill
              alt="Image"
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col text-xl md:text-2xl font-semibold">
            What is forest bathing?
            <div className=" flex flex-row text-sm md:text-lg font-normal">
              Explore the Japanese practice.
            </div>
          </div>
        </>
    );
}

export default AboutHead;