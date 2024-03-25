'use client';

import { useState, useMemo, useRef } from "react";

import usePrompt8Modal from "@/app/hooks/prompts/usePrompt8Modal";
import Modal from "../Modal";
import Heading from "../../Heading";
import AudioButton from "../../journeys/AudioButton";
import usePostMoodModal from "@/app/hooks/usePostMoodModal";
import Button from "../../Button";

enum STEPS {
    PAGE1 = 0,
    PAGE2 = 1,
}

const Prompt8Modal = () => {
    //audio 
    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    //audio controls
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayback = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    //modal
    const prompt8Modal = usePrompt8Modal();
    const postMoodModal = usePostMoodModal();
    const [isLoading, setIsLoading] = useState(false);

    const [step, setStep] = useState(STEPS.PAGE1)

    const onBack = () => {
        setStep((value) => value - 1)
    };

    const onNext = () => {
        setStep((value) => value + 1)
    };

    const onSkip = () => {
        prompt8Modal.onClose();
    }

    const onSubmit = () => {
        if (step != STEPS.PAGE2) {
            return onNext();
        }

        setIsLoading(true);

        prompt8Modal.onClose();
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PAGE2) {
            return 'Done';
        }

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.PAGE1) {
            return 'Skip Prompt';
        }

        return 'Back';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-6 overflow-hidden">
            <Heading 
                title="Invitation 8"
                subtitle="End your journey here"
            />
            <hr />
            <div className="flex flex-row gap-3 text-lg font-medium pb-8">
                    Listen to guide
                    <div>
                        <AudioButton 
                            onClick={togglePlayback}
                            isPlaying={isPlaying}
                        />
                        <audio ref={audioRef}>
                            <source src="/audio/Marker_8a.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
            <div className="text-xl leading-9">
                Your final invitation is to find a sit spot near the Western Redcedar stumps. Find a comfortable place to rest, and invite your senses to join you. Allow yourself to notice what unfolds around and within you. Before we finish, let's revisit your moods, comparing how you feel now to how you felt at the start of your journey.   
            </div>
            <hr />
            <Button 
                label='Take post-mood check'
                onClick={postMoodModal.onOpen}
                outline
            />
        </div>
    )

    if (step === STEPS.PAGE2) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 8"
                    subtitle="End your journey here"
                />
                <hr />
                <div className="flex flex-row gap-3 text-lg font-medium pb-8">
                    Listen to guide
                    <div>
                        <AudioButton 
                            onClick={togglePlayback}
                            isPlaying={isPlaying}
                        />
                        <audio ref={audioRef}>
                            <source src="/audio/Marker_8b.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
                <div className="text-xl leading-9">
                    Thank you for immersing yourself in the tranquility and beauty of Pacific Spirit Regional Park today. If you wish to continue this practice, know you're always welcome here. When you're ready to leave, follow the trail back to the parking lot. Carry this sense of calmness and presence with you, extending the forest bathing experience into your everyday life.
                </div>
            </div>
        )
    }

    return (
        <Modal 
            disabled={isLoading}
            isOpen={prompt8Modal.isOpen}
            onClose={prompt8Modal.onClose}
            onSubmit={onSubmit}
            actionLabel={actionLabel}
            secondaryAction={step === STEPS.PAGE1 ? onSkip : onBack}
            secondaryActionLabel={secondaryActionLabel}
            body={bodyContent}
        />
    );
}

export default Prompt8Modal;