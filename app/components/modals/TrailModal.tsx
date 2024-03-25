'use client';

import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useTrailModal from "../../hooks/useTrailModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { categories } from "../navbar/Categories";
import ImageUpload from "../inputs/ImageUpload";
import RouteTypeSelect from "../inputs/RouteTypeSelect";
import RouteTimeSelect from "../inputs/RouteTimeSelect";
import CategoryInput from "../inputs/CategoryInput";

enum STEPS {
    DESCRIPTION = 0,
    IMAGES = 1,
    INFO = 2, 
    SUITABILITY = 3
}

const TrailModal = () => {
    const router = useRouter();
    const trailModal = useTrailModal();

    const [step, setStep] = useState(STEPS.DESCRIPTION);
    const [isLoading, setIsLoading] = useState(false);

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
            title: '',
            description: '',
            guideType: '',
            routeType: '',
            routeTime: '',
            imageSrc: '',
            suitability: '',
        }
    });

    const imageSrc = watch('imageSrc');
    const suitability = watch('suitability');
    const routeType = watch('routeType');
    const routeTime = watch('routeTime');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
    }

    const onBack = () => {
        setStep((value) => value - 1)
    };

    const onNext = () => {
        setStep((value) => value + 1)
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.SUITABILITY) {
            return onNext();
        }

        setIsLoading(true);

        axios.post('/api/trails', data)
        .then(() => {
            toast.success('Trail listing created');
            router.refresh();
            reset();
            setStep(STEPS.DESCRIPTION)
            trailModal.onClose();
        })
        .catch(() => {
            toast.error('Something went wrong');
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.SUITABILITY) {
            return 'Create';
        }

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.DESCRIPTION) {
            return undefined;
        }

        return 'Back';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading 
                title="Describe the trail"
                subtitle="Give the name and description"
            />
            <Input 
                id="title"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <hr />
            <Input 
                id="description"
                label="Description"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <hr />
            <Input 
                id="address"
                label="Address"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Photos of the trail"
                    subtitle="What does the trail look like"
                />
                <ImageUpload 
                    onChange={(value) => setCustomValue('imageSrc', value)}
                    value={imageSrc}
                />
            </div>
        );
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Trail characteristics"
                    subtitle="Route type, route times"
                />
                <RouteTypeSelect 
                    value={routeType}
                    onChange={(value) => setCustomValue('routeType', value)}
                />
                <hr />
                <RouteTimeSelect 
                    value={routeTime}
                    onChange={(value) => setCustomValue('routeTime', value)}
                />
            </div>
        )
    }

    if (step === STEPS.SUITABILITY) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Suitability of the trail"
                    subtitle="What is the trail good for"
                />
                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-3
                        max-h-[50vh]
                        overflow-y-auto
                    "
                >
                    {categories.map((item) => (
                       <div key={item.label} className="col-span-1">
                            <CategoryInput 
                                onClick={(suitability) => setCustomValue('suitability', suitability)}
                                selected={suitability === item.label}
                                label={item.label}
                                icon={item.icon}
                            />
                       </div> 
                    ))}
                </div>
            </div>
        )
    }

    return (
        <Modal 
            disabled={isLoading}
            isOpen={trailModal.isOpen}
            onClose={trailModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel = {secondaryActionLabel}
            secondaryAction={step === STEPS.DESCRIPTION ? undefined : onBack}
            title="Submit a trail"
            body={bodyContent}
        />
    );
}

export default TrailModal;