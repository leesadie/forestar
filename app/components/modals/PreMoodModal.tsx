'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';

import usePreMoodModal from '@/app/hooks/usePreMoodModal';
import Modal from './Modal';
import Heading from '../Heading';
import { moods } from '../Moods';
import MoodInput from '../inputs/MoodInput';

enum STEPS {
    CALM = 0,
    ENERGY = 1,
    DOWN = 2, 
    CONNECTION = 3,
    ANNOYED = 4,
    FATIGUE = 5,
}

const PreMoodModal = () => {
    const router = useRouter();
    const premoodModal = usePreMoodModal();

    const [step, setStep] = useState(STEPS.CALM);
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
            preStress: '',
            preAnxiety: '',
            preFatigue: '',
            preEnergy: '',
            preConfidence: '',
        }
    });

    const preCalm = watch('preCalm');
    const preEnergy = watch('preEnergy');
    const preDown = watch('preDown');
    const preConnection = watch('preConnection')
    const preAnnoyed = watch('preAnnoyed');
    const preFatigue = watch('preFatigue')

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

    const onSkip = () => {
        premoodModal.onClose();
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.FATIGUE) {
            return onNext();
        }

        setIsLoading(true);

        axios.post('/api/journey', data)
        .then(() => {
            toast.success('Pre-moods saved');
            router.refresh();
            reset();
            setStep(STEPS.CALM)
            premoodModal.onClose();
        })
        .catch(() => {
            toast.error('Something went wrong');
        })
        .finally(() => {
            setIsLoading(false);
        })
    };

    const actionLabel = useMemo(() => {
        if (step === STEPS.FATIGUE) {
            return 'Finish';
        }

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CALM) {
            return 'Skip Survey';
        }

        return 'Back';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8 items-center justify-center">
            <Heading 
                title="How calm are you feeling right now?"
                subtitle="Rate from 1 (not at all) to 5 (extremely)."
                center
            />
            <Image 
                alt="Radial Gradient"
                src='/images/radial_gradient1.jpg'
                width={400}
                height={400}
            />
            <div className="text-xl font-semibold items-center justify-center">
                Calmness
            </div>
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-center
                    gap-6
                    max-h-[50vh]
                    overflow-y-auto
                "
            >
                {moods.map((item) => (
                    <div key={item.label} className="flex-row">
                        <MoodInput 
                            onClick={(preCalm) => setCustomValue('preCalm', preCalm)}
                            selected={preCalm === item.label}
                            label={item.label}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    if (step === STEPS.ENERGY) {
        bodyContent = (
            <div className="flex flex-col gap-8 items-center justify-center">
                <Heading 
                    title="How energetic are you feeling?"
                    subtitle="Rate from 1 (not at all) to 5 (extremely)."
                    center
                />
                <Image 
                    alt="Radial Gradient"
                    src='/images/radial_gradient2.jpg'
                    width={400}
                    height={400}
                />
                <div className="text-xl font-semibold items-center justify-center">
                    Energy
                </div>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-center
                        gap-6
                        max-h-[50vh]
                        overflow-y-auto
                    "
                >
                    {moods.map((item) => (
                        <div key={item.label} className="flex flex-row">
                            <MoodInput 
                                onClick={(preEnergy) => setCustomValue('preEnergy', preEnergy)}
                                selected={preEnergy === item.label}
                                label={item.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (step === STEPS.DOWN) {
        bodyContent = (
            <div className="flex flex-col gap-8 items-center justify-center">
                <Heading 
                    title="How down or blue are you feeling?"
                    subtitle="Rate from 1 (not at all) to 5 (extremely)."
                    center
                />
                <Image 
                    alt="Radial Gradient"
                    src='/images/radial_gradient3.jpg'
                    width={400}
                    height={400}
                />
                <div className="text-xl font-semibold items-center justify-center">
                    Down or blue
                </div>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-center
                        gap-6
                        max-h-[50vh]
                        overflow-y-auto
                    "
                >
                    {moods.map((item) => (
                        <div key={item.label} className="flex flex-row">
                            <MoodInput 
                                onClick={(preDown) => setCustomValue('preDown', preDown)}
                                selected={preDown === item.label}
                                label={item.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (step === STEPS.CONNECTION) {
        bodyContent = (
            <div className="flex flex-col gap-8 items-center justify-center">
                <Heading 
                    title="How connected to nature do you feel?"
                    subtitle="Rate from 1 (not at all) to 5 (extremely)."
                    center
                />
                <Image 
                    alt="Radial Gradient"
                    src='/images/radial_gradient4.jpg'
                    width={400}
                    height={400}
                />
                <div className="text-xl font-semibold items-center justify-center">
                    Connection to nature
                </div>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-center
                        gap-6
                        max-h-[50vh]
                        overflow-y-auto
                    "
                >
                    {moods.map((item) => (
                        <div key={item.label} className="flex flex-row">
                            <MoodInput 
                                onClick={(preConnection) => setCustomValue('preConnection', preConnection)}
                                selected={preConnection === item.label}
                                label={item.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (step === STEPS.ANNOYED) {
        bodyContent = (
            <div className="flex flex-col gap-8 items-center justify-center">
                <Heading 
                    title="How easily annoyed do you feel?"
                    subtitle="Rate from 1 (not at all) to 5 (extremely)."
                    center
                />
                <Image 
                alt="Radial Gradient"
                src='/images/radial_gradient5.jpg'
                width={400}
                height={400}
                />
                <div className="text-xl font-semibold items-center justify-center">
                    Annoyance
                </div>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-center
                        gap-6
                        max-h-[50vh]
                        overflow-y-auto
                    "
                >
                    {moods.map((item) => (
                        <div key={item.label} className="flex flex-row">
                            <MoodInput 
                                onClick={(preAnnoyed) => setCustomValue('preAnnoyed', preAnnoyed)}
                                selected={preAnnoyed === item.label}
                                label={item.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (step === STEPS.FATIGUE) {
        bodyContent = (
            <div className="flex flex-col gap-8 items-center justify-center">
                <Heading 
                    title="How fatigued are you feeling?"
                    subtitle="Rate from 1 (not at all) to 5 (extremely)."
                    center
                />
                <Image 
                alt="Radial Gradient"
                src='/images/radial_gradient6.jpg'
                width={400}
                height={400}
                />
                <div className="text-xl font-semibold items-center justify-center">
                    Fatigue
                </div>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-center
                        gap-6
                        max-h-[50vh]
                        overflow-y-auto
                    "
                >
                    {moods.map((item) => (
                        <div key={item.label} className="flex flex-row">
                            <MoodInput 
                                onClick={(preFatigue) => setCustomValue('preFatigue', preFatigue)}
                                selected={preFatigue === item.label}
                                label={item.label}
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
            isOpen={premoodModal.isOpen}
            onClose={premoodModal.onClose}
            onSubmit={onNext}
            actionLabel={actionLabel}
            secondaryActionLabel = {secondaryActionLabel}
            secondaryAction={step === STEPS.CALM ? onSkip : onBack}
            body={bodyContent}
        />
    )
}

export default PreMoodModal;