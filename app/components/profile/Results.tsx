'use client';

import Container from "../Container";

interface ResultProps {
    pre_scale: string;
    post_scale: string;
    mood: string;
}

const Result: React.FC<ResultProps> = ({
    pre_scale,
    post_scale,
    mood
}) => {
    return (
        <Container>
            <div className="flex flex-row items-center justify-center">
                <div className="mr-3">
                    Pre-Walk
                    <progress className="progress w-56" value={pre_scale} max='5'>
                    </progress>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="mr-3">
                    Post-Walk
                    <progress className="progress w-56" value={post_scale} max='5'>
                    </progress>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 mb-12">
                {mood}
            </div>
        </Container>
    );
}

export default Result;