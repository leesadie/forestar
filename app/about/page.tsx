import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import Navbar from "../components/navbar/Navbar";
import AboutClient from "./AboutClient";

const AboutPage = async () => {
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <Navbar currentUser={currentUser}/>
            <AboutClient />
        </ClientOnly>
    );
}

export default AboutPage;