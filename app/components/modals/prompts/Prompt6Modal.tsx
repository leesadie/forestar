'use client';

import { useState, useRef } from "react";

import usePrompt6Modal from "@/app/hooks/prompts/usePrompt6Modal";
import Modal from "../Modal";
import Heading from "../../Heading";
import AudioButton from "../../journeys/AudioButton";
import Button from "../../Button";

const Prompt6Modal = () => {
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
    const prompt6Modal = usePrompt6Modal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col gap-6 overflow-hidden">
            <Heading 
                title="Invitation 6"
                subtitle="The Douglas Fir Tree"
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
                            <source src="/audio/Marker_6.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
            <div className="text-lg leading-9">
                Stand beside the Douglas fir tree. Feel the deep furrows in the bark, home to many tiny creatures. Everything in this space is somehow connected, or related to each other. How might we sense these connections with our bodies, and perhaps within our hearts? When you feel ready to continue your journey, proceed ahead and around the bend until you reach the next invitation.
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
            isOpen={prompt6Modal.isOpen}
            onClose={prompt6Modal.onClose}
            onSubmit={prompt6Modal.onClose}
            actionLabel='Done'
            body={bodyContent}
        />
    );
}

export default Prompt6Modal;