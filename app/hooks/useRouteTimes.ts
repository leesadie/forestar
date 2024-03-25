const formattedTimes = [
    {value: '30 min', label: 'About 30 min'},
    {value: '45 min', label: 'About 45 min'},
    {value: '60 min', label: 'About 60 min'}
];

const useRouteTimes = () => {
    const getAll = () => formattedTimes;

    const getByValue3 = (value: string) => {
        return formattedTimes.find((item) => item.value === value)
    }

    return {
        getAll, 
        getByValue3
    }
};

export default useRouteTimes;