'use client';

import useRoutes from '../../hooks/useRouteTypes';
import Select from 'react-select';

export type RouteTypeSelectValue = {
    value: string;
    label: string;
}

interface RouteTypeSelectProps {
    value?: RouteTypeSelectValue
    onChange: (value: RouteTypeSelectValue) => void;
}

const RouteTypeSelect: React.FC<RouteTypeSelectProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useRoutes();

    return (
        <div>
            <Select 
                placeholder='Choose your route type'
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as RouteTypeSelectValue)}
                formatOptionLabel={(option: any) => (
                    <div className='flex flex-row items-center gap-3'>
                        <div>{option.flag}</div>
                        <div>
                          {option.label},
                          <span className='text-neutral-500 ml-1'>{option.region}</span>  
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

export default RouteTypeSelect;