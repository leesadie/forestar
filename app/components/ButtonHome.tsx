'use client'

import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const ButtonHome: React.FC<ButtonProps> = ({
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
                hover:opacity-80
                transition
                mt-3
                py-2
                px-5
                lg:w-1/5
                lg:h-12
                lg:text-xl
                ${outline ? 'bg-neutral-200' : 'bg-neutral-100'}
                ${outline ? 'text-black' : 'text-green-900'}
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
                        top-3
                    "
                />
            )}
            {label}
        </button>
    );
}

export default ButtonHome;