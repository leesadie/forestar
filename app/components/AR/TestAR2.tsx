'use client';

import { useEffect } from "react";
/// <reference types="./aframe.d.ts" />

const ARScene = () => {
    useEffect(() => {
        const handleCLick = () => {
            //start ar experience
        };

        document.addEventListener('click', handleCLick);

        return () => {
            document.removeEventListener('click', handleCLick)
        };
    }, []);

    return (
        <a-scene embedded arjs = 'sourceType: webcam; detectionmode: mono_and_matrix;'>
            <a-marker preset='hiro'>
                <a-box position = '0 0.5 0' material='color: red'></a-box>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    );
}

export default ARScene;