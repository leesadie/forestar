'use client';

import { IconType } from "react-icons";

import TrailCategory from "./TrailCategory";
import TrailConditions from "./TrailConditions";
import TrailBreakdown from "./TrailBreakdown";

interface TrailInfoProps {
    routeType: string;
    routeTime: string;
    category: {
        icon: IconType;
        label: string;
        description: string;
    } | undefined
}

const TrailInfo: React.FC<TrailInfoProps> = ({
    routeType,
    routeTime,
    category
}) => {
    return (
        <div className="col-span-4 flex flex-col">
            <div className="flex flex-col gap-2">
                <div className="text-lg font-semibold pb-2">
                    Route Details
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row font-medium">
                        Route Type:
                        <div className="pl-1 text-neutral-600">
                            {routeType}
                        </div>
                    </div>
                    {category && (
                        <TrailCategory 
                            icon={category.icon}
                            label={category.label}
                            description='This trail is dog friendly'
                        />
                    )}
                    <hr className="mt-4"/>
                    <div className="text-lg font-semibold mt-4">
                        Route Conditions
                    </div>
                    <div className="pt-2">
                        <TrailConditions />
                    </div>
                    <hr className="mt-4"/>
                    <div className="text-lg font-semibold mt-4">
                        Route Breakdown
                    </div>
                    <div className="pt-2">
                        <TrailBreakdown />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrailInfo;