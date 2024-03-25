import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import Navbar from "../components/navbar/Navbar";
import ProfileClient from "./ProfileClient";

const ProfilePage = async() => {
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <Navbar currentUser={currentUser}/>
            <ProfileClient 
                currentUser={currentUser}
            />
        </ClientOnly>
    );
}

export default ProfilePage;