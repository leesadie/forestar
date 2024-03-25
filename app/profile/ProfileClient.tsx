'use client';

import { SafeUser } from "../types";
import Container from "../components/Container";
import ProfileHead from "../components/profile/ProfileHead";
import ProfileHistory from "../components/profile/ProfileHistory";
import SurveyModal from "../components/profile/SurveyModal";

interface ProfileClientProps {
    currentUser: SafeUser 
}

const ProfileClient: React.FC<ProfileClientProps> = ({
    currentUser
}) => {
    return (
        <Container>
            <div className="lg:max-w-screen-lg lg:mx-auto mx-3">
                <div className="flex flex-col gap-6">
                    <ProfileHead currentUser={currentUser}/>
                    <hr className="mt-5"/>
                </div>
                <div className="mt-8 text-xl font-medium">
                    Your history
                </div>
                <div>
                    <ProfileHistory />
                </div>
                <SurveyModal />
            </div>
        </Container>
    );
}

export default ProfileClient;