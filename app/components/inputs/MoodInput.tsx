'use client';

interface MoodInputProps {
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const MoodInput: React.FC<MoodInputProps> = ({
    label,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
                rounded-lg
                w-16
                h-16
                border-2
                p-4
                flex
                flex-row
                items-center
                justify-center
                gap-3
                text-lg
                hover:border-neutral-500
                transition
                cursor-pointer
                ${selected ? 'border-neutral-500' : 'border-neutral-200'}
            `}
        >
            <div className="font-medium items-center justify-center">
               {label} 
            </div>
        </div>
    );
}

export default MoodInput;