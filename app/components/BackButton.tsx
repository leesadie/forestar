'use client';

import { IconType } from "react-icons";

interface BackButtonProps {
    label?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    icon: IconType;
}

const BackButton: React.FC<BackButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    icon: Icon
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                flex
                flex-col
                disabled
                disabled:cursor-not-allowed
                hover:opacity-80
                transition
                bg-white
                items-center
                justify-center
                shadow-md
                rounded-md
                w-8
                h-8
                ${outline ? 'border-black' : 'border-green-900'}
                ${outline ? 'text-black' : 'text-white'}
            `}
        >
            {Icon && (
                <Icon 
                    size={20}
                    className="absolute items-center justify-center text-black left-2"
                />
            )}
            {label}
        </button>
    );
}

export default BackButton;