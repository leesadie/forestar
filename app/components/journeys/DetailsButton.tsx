'use client';

import { IconType } from "react-icons";

interface DetailsButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    icon?: IconType;
}

const DetailsButton: React.FC<DetailsButtonProps> = ({
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
                rounded-md
                flex
                flex-col
                disabled
                disabled:cursor-not-allowed
                hover:opacity-80
                transition
                bg-white
                items-center
                justify-center
                w-12
                h-12
                shadow-md
                ${outline ? 'border-black' : 'border-green-900'}
                ${outline ? 'text-black' : 'text-white'}
            `}
        >
            {Icon && (
                <Icon 
                    size={24}
                    className="absolute items-center justify-center text-black"
                />
            )}
            {label}
        </button>
    );
}

export default DetailsButton;