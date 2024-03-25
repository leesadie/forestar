'use client';

import Button from "../Button";
import useSurveyModal from "@/app/hooks/useSurveyModal";

interface HistoryCardProps {
    trail: string;
    time: string;
    duration: string;
    mood: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
    trail,
    time,
    duration,
    mood
}) => {
    const surveyModal = useSurveyModal();

    return (
        <div>
            <div 
                className="
                    flex 
                    flex-row
                    gap-2
                    w-full
                    h-full
                    mt-10
                    md:mt-6
                    items-center
                    justify-center
                "
            >
                <div
                    className="
                        relative
                        rounded-lg
                        outline
                    "
                >
                    <div className="text-lg font-medium p-4">
                        Trail: {trail}
                        <hr className="mt-4"/>
                    </div>
                    <div className="flex flex-row gap-16">
                        <div className="flex flex-row px-4">
                            <div className="font-medium underline underline-offset-2 text-sm">
                                Date:  
                            </div>
                            <div className="px-1 text-sm">
                                {time}
                            </div>
                        </div>
                        <div className="flex flex-row px-4">
                            <div className="font-medium text-sm underline underline-offset-2">
                                Duration:
                            </div>
                            <div className="px-1 text-sm">
                                {duration}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-24 pb-4">
                        <div className="flex flex-row px-4 pt-6">
                            <div className="font-medium text-sm underline underline-offset-2">
                                Mood survey:
                            </div>
                            <div className="px-1 text-sm">
                                {mood}
                            </div>
                        </div>
                        <div className="w-1/3 pt-4">
                            <Button 
                                label="View"
                                onClick={surveyModal.onOpen}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HistoryCard;