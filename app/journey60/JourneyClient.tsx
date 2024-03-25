'use client';

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdArrowBackIos } from 'react-icons/md';

import { SafeJourney, SafeUser } from "../types";
import Map from "../components/journeys/Map";
import DetailsButton from "../components/journeys/DetailsButton";
import BackButton from "../components/BackButton";

import useDetailsModal from "../hooks/useDetailsModal";
import DetailsModal from "../components/modals/DetailsModal";
import PreMoodModal from "../components/modals/PreMoodModal";
import PostMoodModal from "../components/modals/PostMoodModal";

import Prompt1Modal from "../components/modals/prompts/Prompt1Modal";
import Prompt2Modal from "../components/modals/prompts/Prompt2Modal";
import Prompt3Modal from "../components/modals/prompts/Prompt3Modal";
import Prompt4Modal from "../components/modals/prompts/Prompt4Modal";
import Prompt5Modal from "../components/modals/prompts/Prompt5Modal";
import Prompt6Modal from "../components/modals/prompts/Prompt6Modal";
import Prompt7Modal from "../components/modals/prompts/Prompt7Modal";
import Prompt8Modal from "../components/modals/prompts/Prompt8Modal";
import StartModal from "../components/modals/StartModal";

interface JourneyClientProps {
    journey?: SafeJourney;
    currentUser?: SafeUser | null;
}

const JourneyClient: React.FC<JourneyClientProps> = ({
    journey,
    currentUser
}) => {
    const router = useRouter();

    const detailsModal = useDetailsModal();

    const onDetails = useCallback(() => {
        detailsModal.onOpen();
    }, [detailsModal]);

    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="relative">
            <Map />
            <div
                className="
                    absolute
                    bottom-10
                    left-3
                    items-center
                    justify-center
                "
            >
                <DetailsButton 
                    label=""
                    icon={FiMoreHorizontal}
                    onClick={onDetails}
                />
            </div>
            <div
                className="
                    absolute
                    top-3
                    left-3
                    items-center
                    justify-center
                "
            >
                <BackButton 
                    onClick={() => router.push('/')}
                    icon={MdArrowBackIos}
                />
            </div>
            <div>
                <DetailsModal />
                <PreMoodModal />
                <Prompt1Modal />
                <Prompt2Modal />
                <Prompt3Modal />
                <Prompt4Modal />
                <Prompt5Modal />
                <Prompt6Modal />
                <Prompt7Modal />
                <Prompt8Modal />
                <PostMoodModal />
                <StartModal />
            </div>
        </div>
    );
}

export default JourneyClient;