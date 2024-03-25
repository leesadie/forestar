'use client';

import { IconType } from "react-icons";
import { IoMdPlay, IoMdPause } from "react-icons/io";

interface AudioButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    icon?: IconType;
    isPlaying: boolean;
}

const AudioButton: React.FC<AudioButtonProps> = ({
    onClick,
    disabled,
    icon: Icon,
    isPlaying
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="
                rounded-full
                flex
                flex-col
                hover:opacity-60
                transition
                bg-white
                items-center
                justify-center
                w-8
                h-8
                outline
            "
        >
            {isPlaying ? (
                <IoMdPause />
            ) : (
                <IoMdPlay />
            )}
        </button>
    );
}

export default AudioButton;