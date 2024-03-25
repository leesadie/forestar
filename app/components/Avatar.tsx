'use client';

import Image from "next/image";

interface AvatarProps {
    src?: string | null | undefined;
};

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return (
        <Image 
            className="rounded-full h-[30px] w-[30px]"
            height='35'
            width='35'
            alt='Avatar'
            src={src || '/images/placeholder.jpg'}
        />
    );
}

export default Avatar;