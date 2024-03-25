import getCurrentUser from "@/app/actions/getCurrentUser";
import getTrailById from "@/app/actions/getTrailById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import TrailClient from "./TrailClient";
import Navbar from "@/app/components/navbar/Navbar";

interface IParams {
    trailId?: string;
}

const TrailPage = async ({ params }: { params: IParams }) => {
    const trail = await getTrailById(params);
    const currentUser = await getCurrentUser();

    if (!trail) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    };

    return (
        <ClientOnly>
            <Navbar currentUser={currentUser}/>
            <TrailClient 
                trail={trail}
            />
        </ClientOnly>
    );
}

export default TrailPage;