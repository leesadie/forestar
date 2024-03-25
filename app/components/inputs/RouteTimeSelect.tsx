'use client';

import useRouteTimes from "../../hooks/useRouteTimes";
import Select from 'react-select';

export type RouteTimeSelectValue = {
    value: string;
    label: string
}

interface RouteTimeSelectProps {
    value?: RouteTimeSelectValue
    onChange: (value: RouteTimeSelectValue) => void;
}

const RouteTimeSelect: React.FC<RouteTimeSelectProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useRouteTimes();

    return (
        <div>
            <Select 
                placeholder='How much time do you have today?'
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as RouteTimeSelectValue)}
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

export default RouteTimeSelect;