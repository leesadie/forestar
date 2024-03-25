'use client';

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { SafeTrail } from "@/app/types";

import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import TrailHead from "@/app/components/trails/TrailHead";
import TrailInfo from "@/app/components/trails/TrailInfo";
import TrailTime from "@/app/components/trails/TrailTime";

interface TrailClientProps {
    trail: SafeTrail
}

const TrailClient: React.FC<TrailClientProps> = ({
    trail
}) => {
    const suitability = useMemo(() => {
        return categories.find((item) => item.label === trail.suitability);
    }, [trail.suitability]);

    return (
        <Container>
            <div className="lg:max-w-screen-lg lg:mx-auto mx-3">
                <div className="flex flex-col gap-6">
                    <TrailHead 
                        title={trail.title}
                        description={trail.description}
                        imageSrc={trail.imageSrc}
                        id={trail.id}
                        address={trail.address}
                    />
                <hr />
                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-7
                            md:gap-10
                        "
                    >
                        <TrailInfo 
                            category={suitability}
                            routeType={trail.routeType}
                            routeTime={trail.routeTime}
                        />
                        <div 
                            className="
                                order-first
                                mb-10
                                md:order-last
                                md:col-span-3
                            "
                        >
                            <TrailTime />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default TrailClient;