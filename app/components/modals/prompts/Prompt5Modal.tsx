'use client';

import { useState, useRef } from "react";

import usePrompt5Modal from "@/app/hooks/prompts/usePrompt5Modal";
import Modal from "../Modal";
import Heading from "../../Heading";
import AudioButton from "../../journeys/AudioButton";
import Button from "../../Button";

const Prompt5Modal = () => {
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
    const prompt5Modal = usePrompt5Modal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col gap-6 overflow-hidden">
            <Heading 
                title="Invitation 5"
                subtitle="The Western Hemlock Trees: explore the sense of touch"
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
                            <source src="/audio/Marker_5.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
            <div className="text-lg leading-9">
                Between these two Western Hemlock trees, take a moment to feel their presence. These trees are distinctive for their soft, feathery needles and their rough bark. Extend your hand and let your fingers explore the bark. Feel the grooves and crevices, the contrast of rough and smooth beneath your fingertips. Step back and observe the arrangement of the branches. See how they spread out, adorned with their delicate, soft needles. Take your time, and when you feel ready, we’ll continue on our journey.
            </div>
            <hr />
            <div>
                <Button 
                    label="View in AR"
                    onClick={() => {}}
                    outline
                />
            </div>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={prompt5Modal.isOpen}
            onClose={prompt5Modal.onClose}
            onSubmit={prompt5Modal.onClose}
            actionLabel='Done'
            body={bodyContent}
        />
    )
}

export default Prompt5Modal;