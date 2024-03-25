'use client';

import HistoryCard from "./HistoryCard";

const ProfileHistory = () => {
    return (
        <div className="flex lg:flex-row lg:gap-40 lg:justify-start lg:items-start flex-col pb-8 w-full">
            <HistoryCard 
                trail="Lily of the Valley Trail"
                time="2023-08-30 12:00pm"
                duration="30 mins"
                mood="Taken"
            />
            <HistoryCard 
                trail="Lost Lagoon"
                time="2023-05-20 10:00am"
                duration="45 mins"
                mood="Taken"
            />
        </div>
    );
}

export default ProfileHistory;