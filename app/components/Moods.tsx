'use client';

import { useSearchParams } from "next/navigation";

import Container from "./Container";
import MoodBox from "./MoodBox";

export const moods = [
    {
        label: '1',
        description: 'Low level'
    },
    {
        label: '2',
        description: 'Mid-low level'
    },
    {
        label: '3',
        description: 'Mid level'
    },
    {
        label: '4',
        description: 'Mid-high level'
    },
    {
        label: '5',
        description: 'High level'
    }
]

const Moods = () => {
    const params = useSearchParams();
    const mood = params?.get('mood');

    return (
        <Container>
            <div
                className="
                    pt-2
                    flex
                    flex-row
                    items-center
                    justify-center
                    overflow-x-auto
                "
            >
                {moods.map((item) => (
                    <MoodBox 
                        key={item.label}
                        label={item.label}
                        selected={mood === item.label}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Moods;