import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const {
        title,
        description,
        imageSrc,
        suitability,
        routeType, 
        routeTime,
        address
    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const trail = await prisma.trail.create({
        data: {
            title, 
            description,
            imageSrc,
            suitability,
            routeType: routeType.value,
            routeTime: routeTime.value,
            address
        }
    });

    return NextResponse.json(trail);
}