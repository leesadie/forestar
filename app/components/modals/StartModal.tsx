'use client';

import { useState } from "react";

import useStartModal from "@/app/hooks/useStartModal";
import HalfModal from "./HalfModal";
import Heading from "../Heading";

const StartModal = () => {
    const startModal = useStartModal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <Heading 
                title="Ready to start?"
            />
            <div className="text-sm">
                Your guide: Tara
            </div>
            <div className="items-center justify-center flex mt-8">
                <div 
                    className="flex rounded-lg outline h-28 w-full items-center justify-center"
                >
                    <div 
                        className="font-medium items-center justify-center"
                    >
                        You're in a quiet session for:
                        <div className="ml-20 underline underline-offset-2">
                            60 min
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <HalfModal 
            disabled={isLoading}
            isOpen={startModal.isOpen}
            onClose={startModal.onClose}
            onSubmit={startModal.onClose}
            actionLabel="Let's go"
            body={bodyContent}
        />
    );
}

export default StartModal;