'use client';

import { IconType } from "react-icons";

interface AudioMoreButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const AudioMoreButton: React.FC<AudioMoreButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                disabled
                disabled:cursor-not-allowed
                rounded-lg
                transition
                mt-3
                py-2
                px-5
                lg:w-1/3
                lg:h-12
                lg:text-base
                text-base
                ${outline ? 'bg-white' : 'bg-neutral-100'}
                ${outline ? 'border-neutral-600' : 'border-transparent'}
                ${outline ? 'border-[2px]' : 'border-[0px]'}
                ${outline ? 'text-black' : 'text-green-900'}
                ${outline ? 'hover:bg-neutral-100' : 'hover:bg-transparent'}
                ${small ? 'py-1' : 'py-2'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'font-light' : 'font-medium'}
                ${small ? 'border-[1px]' : 'border-2'}
            `}
        >
            {Icon && (
                <Icon 
                    size={24}
                    className="
                        absolute
                        left-4
                    "
                />
            )}
            <div className="ml-6">
                {label}
            </div>
        </button>
    );
}

export default AudioMoreButton;