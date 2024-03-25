'use client';

import { useState, useCallback } from "react";
import { AiFillSound } from "react-icons/ai";

import Heading from "../Heading";
import useDetailsModal from "../../hooks/useDetailsModal";
import Modal from "./Modal";
import AudioMoreButton from "../journeys/AudioMoreButton";
import useRouteModal from "@/app/hooks/useRouteModal";

const DetailsModal = () => {
    const detailsModal = useDetailsModal();
    const [isLoading, setIsLoading] = useState(false);

    const routeModal = useRouteModal();

    const onAudio = useCallback(() => {
        detailsModal.onClose();
        routeModal.onOpen();
    }, [detailsModal, routeModal])

    const bodyContent = (
        <div className="flex flex-col">
            <Heading 
                title="More for your journey"
            />
            <hr className="mt-4"/>
            <div
                className="
                    flex
                    flex-row
                    gap-32
                    sm:gap-48
                    md:gap-44
                    lg:gap-72
                    text-lg
                    font-normal
                    mt-4
                "
            >
                <div className="mt-4 text-lg">
                    Listen to the guide
                </div>
                <AudioMoreButton 
                    label="Turn on audio"
                    onClick={onAudio}
                    outline
                    icon={AiFillSound}
                />
            </div>
            <hr className="mt-8"/>
            <div
                className="
                    bg-white
                    rounded-xl
                    border-[1px]
                    border-neutral-200
                    pb-2
                    mt-8
                "
            >
                <div className="flex flex-row items-center w-full gap-1 p-4">
                    Chatbot here
                </div>
            </div>
        </div>
    );

    return (
        <Modal 
            disabled={isLoading}
            isOpen={detailsModal.isOpen}
            onClose={detailsModal.onClose}
            onSubmit={detailsModal.onClose}
            actionLabel="Continue"
            body={bodyContent}
        />
    )
}

export default DetailsModal;