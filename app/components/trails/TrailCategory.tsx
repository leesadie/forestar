'use client';

import { IconType } from "react-icons";

interface TrailCategoryProps {
    icon: IconType;
    label: string;
    description: string;
}

const TrailCategory: React.FC<TrailCategoryProps> = ({
    icon: Icon,
    label,
    description
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-1">
                <Icon size={30} />
                <div className="flex flex-col">
                    <div className="font-medium text-neutral-600">
                        {label}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrailCategory;