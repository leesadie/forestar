'use client';

import usePrompt4Modal from "@/app/hooks/prompts/usePrompt4Modal";
import Modal from "../Modal";
import Heading from "../../Heading";
import AudioButton from "../../journeys/AudioButton";
import Button from "../../Button";

import { useState, useMemo, useRef } from "react";

enum STEPS {
    PAGE1 = 0,
    PAGE2 = 1,
    PAGE3 = 2,
    PAGE4 = 3,
    PAGE5 = 4, 
    PAGE6 = 5,
    PAGE7 = 6,
    PAGE8 = 7,
}

const Prompt4Modal = () => {
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
    const prompt4Modal = usePrompt4Modal();
    const [isLoading, setIsLoading] = useState(false);

    const [step, setStep] = useState(STEPS.PAGE1)

    const onBack = () => {
        setStep((value) => value - 1)
    };

    const onNext = () => {
        setStep((value) => value + 1)
    };

    const onSkip = () => {
        prompt4Modal.onClose();
    }

    const onSubmit = () => {
        if (step != STEPS.PAGE8) {
            return onNext();
        }

        setIsLoading(true);

        prompt4Modal.onClose();
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PAGE8) {
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
                title="Invitation 4"
                subtitle="Explore your senses"
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
                            <source src="/audio/Marker_4a.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
            <div className="text-xl, leading-9">
                Find a comfortable spot to stand. Notice your breath — the cool intake of air, the gentle exhale. Let your awareness settle. Feel the connection your body has with the earth beneath you. Shift your weight and observe the sensations in your feet, how you are tethered to the ground. Imagine roots extending from your soles, going deep into the earth below. Take a moment to listen to your body. Is it asking for a stretch, a gentle massage? Listen, and respond.
            </div>
        </div>
    )

    if (step === STEPS.PAGE2) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 4"
                    subtitle="Explore your senses"
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
                            <source src="/audio/Marker_4b.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
                <div className="text-xl leading-9">
                    Seek out a spot to sit: a bench, a log, or a space off the path. Make sure you’re comfortable. Close your eyes or soften your gaze. 
                </div>
                <hr className="mt-10"/>
                <div>
                    <Button 
                        label="View in AR"
                        onClick={() => {}}
                        outline
                    />
                </div>
            </div>
        )
    }

    if (step === STEPS.PAGE3) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 4"
                    subtitle="Explore your senses"
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
                            <source src="/audio/Marker_4c.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
                <div className="text-xl leading-9">
                    Turn your attention to your nose to take in the smells of this moment. Feel immersed in the perfume of nature. 
                </div>
                <hr className="mt-10"/>
                <div>
                    <Button 
                        label="View in AR"
                        onClick={() => {}}
                        outline
                    />
                </div>
            </div>
        )
    }

    if (step === STEPS.PAGE4) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 4"
                    subtitle="Explore your senses"
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
                            <source src="/audio/Marker_4d.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
                <div className="text-xl leading-9">
                    Turn your attention to taste. Can you taste the environment on the tip of your tongue? 
                </div>
                <hr className="mt-10"/>
                <div>
                    <Button 
                        label="View in AR"
                        onClick={() => {}}
                        outline
                    />
                </div>
            </div>
        )
    }

    if (step === STEPS.PAGE5) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 4"
                    subtitle="Explore your senses"
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
                            <source src="/audio/Marker_4e.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
                <div className="text-xl leading-9">
                    Shift your focus to your ears. What are the sounds that fill this space? 
                </div>
                <hr className="mt-10"/>
                <div>
                    <Button 
                        label="View in AR"
                        onClick={() => {}}
                        outline
                    />
                </div>
            </div>
        )
    }

    if (step === STEPS.PAGE6) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 4"
                    subtitle="Explore your senses"
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
                            <source src="/audio/Marker_4f.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
                <div className="text-xl leading-9">
                    Focus on your skin. The feeling of the air, the touch of the earth, the warmth of sunlight. What does this space in this moment feel like?
                </div>
                <hr className="mt-10"/>
                <div>
                    <Button 
                        label="View in AR"
                        onClick={() => {}}
                        outline
                    />
                </div>
            </div>
        )
    }

    if (step === STEPS.PAGE7) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 4"
                    subtitle="Explore your senses"
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
                            <source src="/audio/Marker_4g.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
                <div className="text-xl leading-9">
                    Turn your attention to your eyes. What does this space look like? See the dance of light and shadow, notice how colors play together. 
                </div>
                <hr className="mt-10"/>
                <div>
                    <Button 
                        label="View in AR"
                        onClick={() => {}}
                        outline
                    />
                </div>
            </div>
        )
    }

    if (step === STEPS.PAGE8) {
        bodyContent = (
            <div className="flex flex-col gap-6 overflow-hidden">
                <Heading 
                    title="Invitation 4"
                    subtitle="Explore your senses"
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
                            <source src="/audio/Marker_4h.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
                <div className="text-xl leading-9">
                    If you find a sensation that feels good, an enjoyable sight, sound, touch, or smell, let your attention rest there. Take one more mindful breath, a deep inhale and a slow exhale. When you are ready, continue on to find the majestic Western Hemlock trees. Carry this newfound sense of awareness and connection forward as you move along your journey.
                </div>
            </div>
        )
    }

    return (
        <Modal 
        disabled={isLoading}
        isOpen={prompt4Modal.isOpen}
        onClose={prompt4Modal.onClose}
        onSubmit={onSubmit}
        actionLabel={actionLabel}
        secondaryAction={step === STEPS.PAGE1 ? onSkip : onBack}
        secondaryActionLabel={secondaryActionLabel}
        body={bodyContent}
        />
    )
}

export default Prompt4Modal;