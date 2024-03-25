'use client';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react';
import { useRouter } from "next/navigation";

import Button from "../Button";
import RouteTimeSelect from "../inputs/RouteTimeSelect";
import useRouteModal from "../../hooks/useRouteModal";

const TrailTime = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const routeModal = useRouteModal();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            routeTime: '',
        }
    });

    const routeTime = watch('routeTime');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (routeTime && routeTime.value === '30 min') {
            router.push('/journey30')
        } else if (routeTime && routeTime.value === '45 min') {
            router.push('/journey45')
        } else if (routeTime && routeTime.value === '60 min') {
            router.push('/journey60')
        }
        reset();
        routeModal.onOpen();
    };

    return (
        <div
            className="
                bg-white
                rounded-lg
                border-[1px]
                border-neutral-200
                pb-2
                mt-3
            "
        >
            <div className="flex flex-row items-center w-full gap-1 p-4">
                <div className="text-lg font-medium">
                    How much time do you have?
                </div>
            </div>
            <hr />
            <div className="p-4">
                <RouteTimeSelect 
                    value={routeTime}
                    onChange={(value) => setCustomValue('routeTime', value)}
                />
            </div>
            <hr />
            <div className="p-4">
                <Button 
                    disabled={isLoading}
                    label="Ok"
                    onClick={onSubmit}
                />
            </div>
        </div>
    );
}

export default TrailTime;