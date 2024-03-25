'use client';

import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { IoMdPlay, IoMdPause } from "react-icons/io";

import useRouteModal from "../../hooks/useRouteModal";
import Modal from "./Modal";
import Heading from "../Heading";
import AudioSelect from "../inputs/AudioSelect";
import useStartModal from "@/app/hooks/useStartModal";

const AudioModal = () => {
    const routeModal = useRouteModal();
    const [isLoading, setIsLoading] = useState(false);

    const startModal = useStartModal();

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
            guideType: '',
        }
    });

    const guideType = watch('guideType')

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
    }

    const onSelect = useCallback(() => {
        routeModal.onClose();
        startModal.onOpen();
    }, [routeModal, startModal])

    const bodyContent = (
        <div className="flex flex-col gap-6">
            <Heading 
                title="Tailor your journey"
                subtitle="Choose your guide."
            />
            <hr />
            <div className="text-lg">
                Listen or read?
            </div>
            <div>
                <AudioSelect 
                    value={guideType}
                    onChange={(value) => setCustomValue('guideType', value)}
                />
                {guideType && guideType.value === 'Listen to guide' && (
                    <div className="flex flex-col">
                        <hr className="mt-8"/>
                        <div className="flex flex-row gap-10 mt-8">
                            <div className="relative rounded-full w-24 h-24 border-[2px] items-center justify-center border-neutral-400 hover:shadow-md">
                                <Image 
                                    src='/images/placeholder.jpg'
                                    alt="guide"
                                    fill
                                    className="absolute rounded-full cursor-pointer"
                                    onClick={() => {}}
                                />
                                <div 
                                    className="absolute ml-9 mt-9 cursor-pointer"
                                    onClick={() => {}}
                                >
                                    <IoMdPlay size={24}/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-medium text-lg">
                                    Tara
                                </div>
                                <div className="text-sm">
                                    Certified forest bathing guide
                                </div>
                                <div className="text-sm">
                                    <button
                                        onClick={onSelect}
                                        className="underline underline-offset-2 hover:opacity-60 text-neutral-600"
                                    >
                                        Select guide
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*
                        <div className="flex flex-row gap-10 mt-8">
                            <div className="relative rounded-full w-24 h-24 border-[2px] border-neutral-400 hover:shadow-md">
                                <Image 
                                    src='/images/placeholder.jpg'
                                    alt="guide"
                                    fill
                                    className="absolute rounded-full cursor-pointer"
                                    onClick={() => {}}
                                />
                                <div 
                                    className="absolute ml-9 mt-9 cursor-pointer"
                                    onClick={() => {}}
                                >
                                    <IoMdPlay size={24}/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-medium text-lg">
                                    Yoshiki
                                </div>
                                <div className="text-sm">
                                    Certified forest bathing guide
                                </div>
                                <div className="text-sm">
                                    <button
                                        onClick={() => {}}
                                        className="underline underline-offset-2 hover:opacity-60 text-neutral-600"
                                    >
                                        Select guide
                                    </button>
                                </div>
                            </div>
                        </div>
                        */}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <Modal 
            disabled={isLoading}
            isOpen={routeModal.isOpen}
            onClose={routeModal.onClose}
            onSubmit={onSelect}
            actionLabel="Done"
            body={bodyContent}
        />
    );
}

export default AudioModal;