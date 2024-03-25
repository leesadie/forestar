'use client';

import Image from "next/image";
import Heading from "../Heading";
import { SafeUser } from "@/app/types";

interface ProfileHeadProps {
  currentUser: SafeUser
}

const ProfileHead: React.FC<ProfileHeadProps> = ({
  currentUser
}) => {
    return (
        <>
          <Heading 
            title='Hello [user.name],'
            subtitle='View your results and previous walks here.'
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
              src='/images/head_profile.jpg'
              fill
              alt="Image"
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col text-xl font-medium">
            Hello {currentUser.name},
            <div className=" flex flex-row text-sm md:text-lg font-normal">
              View your results and previous journeys here.
            </div>
          </div>
        </>
    );
}

export default ProfileHead;