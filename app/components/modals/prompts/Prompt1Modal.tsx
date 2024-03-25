'use client';

import { useState, useMemo, useRef } from "react";

import usePrompt1Modal from "@/app/hooks/prompts/usePrompt1Modal";
import Modal from "../Modal";
import Heading from "../../Heading";
import AudioButton from "../../journeys/AudioButton";

enum STEPS {
    PAGE1 = 0,
    PAGE2 = 1,
    PAGE3 = 2,
}

const Prompt1Modal = () => {
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
    const prompt1Modal = usePrompt1Modal();
    const [isLoading, setIsLoading] = useState(false);

    const [step, setStep] = useState(STEPS.PAGE1)

    const onBack = () => {
        setStep((value) => value - 1)
    };

    const onNext = () => {
        setStep((value) => value + 1)
    };

    const onSkip = () => {
        prompt1Modal.onClose();
    };

    const onSubmit = () => {
        if (step != STEPS.PAGE3) {
            return onNext();
        }

        setIsLoading(true);

        prompt1Modal.onClose();
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PAGE3) {
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
                title="Invitation 1"
                subtitle="Welcome to your journey"
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
                        <source src="/audio/Marker_1a.mp3" type="audio/mpeg"/>
                    </audio>
                </div>
            </div>
            <div className="text-xl leading-9">
                Welcome to Pacific Spirit Regional Park. We’re on the traditional, ancestral, and unceded territories of the hən̓q̓əmin̓əm̓-speaking xʷməθkʷəy̓əm Musqueam people, who have been the caretakers of these lands since time immemorial. We extend our heartfelt gratitude for their stewardship. During this nature immersion journey, allow us to guide you along the Cleveland and Lily-of-the-Valley trails.
            </div>
        </div>
    );

    if (step === STEPS.PAGE2) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 1"
                    subtitle="Welcome to your journey"
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
                            <source src="/audio/Marker_1b.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
                <div className="text-xl leading-9">
                    As you wander, we’ll invite you to interact with nature in various ways at certain designated spots. If you would like to view these interactions in AR, feel free to pause the audio and tap on the highlighted marker. Resume your journey whenever you’re ready by pressing play, or we can simply continue on. Before you begin, we encourage you to turn off the notifications on your phone. You’re in a quiet session for the duration of your journey.
                </div>
            </div>
        )
    }

    if (step === STEPS.PAGE3) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 1"
                    subtitle="Welcome to your journey"
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
                            <source src="/audio/Marker_1c.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
                <div className="text-xl leading-9">
                    Take a moment to familiarize yourself with the layout of the park and the trails that await you. Use the map displayed on the information board and our interactive map in the app to guide you. Notice the building before you, it has restrooms and water fountain, should you need them. If you have questions or would like to learn more about this trail, talk to us through our chatbot, which you can find by tapping the button on the bottom left of the map. When you feel ready, let your senses guide you northward, towards the picnic bench. Your journey begins there.
                </div>
            </div>
        )
    }

    return (
        <Modal 
            disabled={isLoading}
            isOpen={prompt1Modal.isOpen}
            onClose={prompt1Modal.onClose}
            onSubmit={onSubmit}
            actionLabel={actionLabel}
            secondaryAction={step === STEPS.PAGE1 ? onSkip : onBack}
            secondaryActionLabel={secondaryActionLabel}
            body={bodyContent}
        />
    );
}

export default Prompt1Modal;