'use client';

import { useState, useMemo, useRef } from "react";
import { IoMdPlay } from "react-icons/io";

import usePrompt2Modal from "@/app/hooks/prompts/usePrompt2Modal";
import Modal from "../Modal";
import Heading from "../../Heading";
import AudioButton from "../../journeys/AudioButton";
import usePreMoodModal from "@/app/hooks/usePreMoodModal";
import Button from "../../Button";

enum STEPS {
    PAGE1 = 0,
    PAGE2 = 1,
}

const Prompt2Modal = () => {
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
    const prompt2Modal = usePrompt2Modal();
    const preMoodModal = usePreMoodModal();
    const [isLoading, setIsLoading] = useState(false);


    const [step, setStep] = useState(STEPS.PAGE1)

    const onBack = () => {
        setStep((value) => value - 1)
    };

    const onNext = () => {
        setStep((value) => value + 1)
    };

    const onSkip = () => {
        prompt2Modal.onClose();
    }

    const onSubmit = () => {
        if (step != STEPS.PAGE2) {
            return onNext();
        }

        setIsLoading(true);

        prompt2Modal.onClose();
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
                title="Invitation 2"
                subtitle="Settle: take a breath"
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
                            <source src="/audio/Marker_2a.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
            <div className="text-xl leading-9">
                Pause here and take a moment to settle. What are you feeling? Recognizing our current state is the first step in seeing how the forest can impact our well-being. Let’s begin with a mood check to capture your current emotional state. At the end of our journey, we’ll revisit this so you can see any changes from before to after.  
            </div>
            <hr />
            <Button 
                label='Take pre-mood check'
                onClick={preMoodModal.onOpen}
                outline
            />
        </div>
    )

    if (step === STEPS.PAGE2) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 2"
                    subtitle="Settle: take a breath"
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
                                <source src="/audio/Marker_2b.mp3" type="audio/mpeg"/>
                            </audio>
                        </div>
                </div>
                <div className="text-xl leading-9">
                    Now, let's take a few mindful breaths, allowing ourselves to be fully present in this moment. Inhale the forest air. Allow your senses to awaken and wander as you become aware of rustling leaves, birdsong, and sounds of wildlife. When you feel ready, I invite you to begin walking towards the Cleveland and Heron intersection in the distance. Start a slow, mindful walk, letting your strides be small and relaxed. Let your gaze meander; take in the colors of the foliage and the bark, and notice the dance of light and shadow around you.
                </div>
            </div>
        )
    }

    return (
        <Modal 
            disabled={isLoading}
            isOpen={prompt2Modal.isOpen}
            onClose={prompt2Modal.onClose}
            onSubmit={onSubmit}
            actionLabel={actionLabel}
            secondaryAction={step === STEPS.PAGE1 ? onSkip : onBack}
            secondaryActionLabel={secondaryActionLabel}
            body={bodyContent}
        />
    );
}

export default Prompt2Modal;