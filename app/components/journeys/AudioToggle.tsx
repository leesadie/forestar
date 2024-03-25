'use client';

import Switch from 'react-switch';

interface AudioToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const AudioToggle: React.FC<AudioToggleProps> = ({
    checked,
    onChange
}) => {
    return (
        <Switch 
            checked={checked}
            onChange={onChange}
            onColor='#3a3a3a'
            onHandleColor='#ffffff'
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow='0px 1px 5px rgba(0,0,0,0.6)'
            activeBoxShadow='0px 0px 1px 10px rgba(0,0,0,0.2)'
            height={30}
            width={50}
            className='react-switch'
        />
    );
}

export default AudioToggle;