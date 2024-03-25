import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import JourneyClient from "./JourneyClient";

const Journey1 = async () => {
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <JourneyClient />
        </ClientOnly>
    );
}

export default Journey1;