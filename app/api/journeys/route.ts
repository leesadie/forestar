import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    const body = await request.json();

    const {
        preStress, 
        preAnxiety, 
        preFatigue, 
        preEnergy,
        preConfidence,
        postStress, 
        postAnxiety, 
        postFatigue, 
        postEnergy, 
        postConfidence,
        guideType,
        routeTime 
    } = body;
}