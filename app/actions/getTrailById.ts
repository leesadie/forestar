import prisma from '@/app/libs/prismadb';

interface IParams {
    trailId?: string;
}

export default async function getTrailById(
    params: IParams
) {
    try {
        const { trailId } = params;

        const trail = await prisma.trail.findUnique({
            where: {
                id: trailId
            }
        });

        if (!trail){
            return null;
        }

        return {
            ...trail,
            createdAt: trail.createdAt.toISOString(),
        };
    } catch (error: any) {
        throw new Error(error);
    }
}