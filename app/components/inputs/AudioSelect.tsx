'use client';

import { useState } from 'react';
import useAudio from '../../hooks/useAudio';
import Select from 'react-select';

export type AudioSelectValue = {
    value: string;
    label: string
}

interface AudioSelectProps {
    value?: AudioSelectValue
    onChange: (value: AudioSelectValue) => void;
}

const AudioSelect: React.FC<AudioSelectProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useAudio();

    return (
        <div>
            <Select 
                placeholder='Choose how you want to be guided'
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as AudioSelectValue)}
                formatOptionLabel={(option: any) => (
                    <div className='flex flex-row items-center gap-3'>
                        <div>
                          {option.label}
                        </div>
                    </div>
                )}
                classNames={{
                    control: () => 'p-3 border-2',
                    input: () => 'text-lg',
                    option: () => 'text-lg'
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#d1ffbd'
                    }
                })}
            />

        </div>
    ) 
}

export default AudioSelect;