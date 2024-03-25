'use client';

import Container from "../components/Container";
import AboutHead from "../components/about/AboutHead";

const AboutClient = () => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <AboutHead />
                </div>
            </div>
        </Container>
    );
}

export default AboutClient;