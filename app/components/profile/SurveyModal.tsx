'use client';

import { useState } from "react";

import useSurveyModal from "@/app/hooks/useSurveyModal";
import Modal from "../modals/Modal";
import Heading from "../Heading";
import { Survey } from "./Survey";

const SurveyModal = () => {
    const surveyModal = useSurveyModal();
    const [isLoading, setIsLoading] = useState();

    const bodyContent = (
        <div className="flex flex-col gap-6 overflow-hidden">
            <Heading 
                title="Your pre + post moods"
            />
            <hr />
            <div>
                <Survey />
            </div>
        </div>
    );

    return (
        <Modal 
            disabled={isLoading}
            isOpen={surveyModal.isOpen}
            onClose={surveyModal.onClose}
            onSubmit={surveyModal.onClose}
            actionLabel="Done"
            body={bodyContent}
        />
    );
}

export default SurveyModal;