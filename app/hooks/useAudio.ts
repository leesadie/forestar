const formattedTypes = [
    {value: 'Listen to guide', label: 'Listen to guide'},
    {value: 'Read the guide', label: 'Read the guide'}
];

const useAudio = () => {
    const getAll = () => formattedTypes;

    const getByValueA = (value: string) => {
        return formattedTypes.find((item) => item.value === value)
    }

    return {
        getAll, 
        getByValueA
    }
};

export default useAudio;