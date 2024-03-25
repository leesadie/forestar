'use client';

import { useState, useRef, useEffect } from 'react';

import usePrompt3Modal from "@/app/hooks/prompts/usePrompt3Modal";
import Modal from "../Modal";
import Heading from "../../Heading";
import Button from "../../Button";
import AudioButton from "../../journeys/AudioButton";
import 'aframe';
import ARScene from '../../AR/TestAR2';

const Prompt3Modal = () => {
    //camera
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleButtonClick = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing camera', error)
        }
    }

     
    //AR attempt
    const startAR = () => {
        const scene = document.querySelector('a-scene');

        const marker = document.createElement('a-marker');
        marker.setAttribute('preset', 'hiro');

        const box = document.createElement('a-box');
        box.setAttribute('position', '0 0.5 0');
        box.setAttribute('material', 'color: red');

        marker.appendChild(box);

        scene.appendChild(marker);
    };
    

    const handleClick = () => {
        startAR();
    }
    

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
    const prompt3Modal = usePrompt3Modal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col gap-6 overflow-hidden">
            <Heading 
                title="Invitation 3"
                subtitle="Cleveland & Heron Intersection: be mindful"
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
                            <source src="/audio/Marker_3.mp3" type="audio/mpeg"/>
                        </audio>
                    </div>
            </div>
            <div className="text-lg leading-9">
                Listen closely. Can you hear the subtle symphony of the forest? The rustling leaves, the distant call of a bird, the whispering breeze. Feel the air against your skin. Is it cooler or warmer? With every step, your relationship with the environment deepens. The forest is alive, ever-changing, and full of wonder waiting to be discovered. If something catches your eye, explore it. Take all the time you need. When you feel ready, we will continue our journey along Cleveland, moving towards the Lily of the Valley trail.
            </div>
            <hr />
            <div>
                <Button 
                    label="View in AR"
                    onClick={handleClick}
                    outline
                />
            </div>
            {/*
            <div className='mt-4 rounded-lg'>
                <video ref={videoRef} autoPlay={true} />
            </div>
            */}
            <ARScene />
            
        </div>
    )

    return (
        <div>
            <Modal 
                disabled={isLoading}
                isOpen={prompt3Modal.isOpen}
                onClose={prompt3Modal.onClose}
                onSubmit={prompt3Modal.onClose}
                actionLabel='Done'
                body={bodyContent}
            />
        </div>
    )
}

export default Prompt3Modal;