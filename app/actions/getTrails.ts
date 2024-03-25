import prisma from '@/app/libs/prismadb';

export default async function getTrails() {
    try {
        const trails = await prisma.trail.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const safeTrails = trails.map((trail) => ({
            ...trail,
            createdAt: trail.createdAt.toISOString()
        }));

        return safeTrails;
    } catch (error: any) {
        throw new Error(error);
    }
}