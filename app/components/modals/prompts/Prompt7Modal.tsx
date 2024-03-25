'use client';

import { useState, useRef } from "react";

import usePrompt7Modal from "@/app/hooks/prompts/usePrompt7Modal";
import Modal from "../Modal";
import Heading from "../../Heading";
import AudioButton from "../../journeys/AudioButton";
import Button from "../../Button";

const Prompt7Modal = () => {
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
    const prompt7Modal = usePrompt7Modal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col gap-6 overflow-hidden">
            <Heading 
                title="Invitation 7"
                subtitle="The Vine Maple: part of the forest"
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
                            <source src="/audio/Marker_7.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
            <div className="text-xl leading-9">
                Notice the Vine Maple tree in the middle of the path. Around it, a 'river' of vine maple leaves forms, flowing through the midstory of the forest. Imagine yourself as a part of this flowing river, immersing yourself in its gentle journey. When you feel ready, let this river guide you to your next invitation.
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
            isOpen={prompt7Modal.isOpen}
            onClose={prompt7Modal.onClose}
            onSubmit={prompt7Modal.onClose}
            actionLabel='Done'
            body={bodyContent}
        />
    );
}

export default Prompt7Modal;