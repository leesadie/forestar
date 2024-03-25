const formattedRoutes = [
    {value: 'Loop', label: 'Loop'},
    {value: 'Out and Back', label: 'Out & back'},
    {value: 'Point to Point', label: 'Point to point'},
];

const useRoutes = () => {
    const getAll = () => formattedRoutes;

    const getByValue2 = (value: string) => {
        return formattedRoutes.find((item) => item.value === value)
    }

    return {
        getAll, 
        getByValue2
    }
};

export default useRoutes;