import { useEffect, useState } from 'react';

export const PROPERTIES_ENDPOINT = 'http://localhost:3000/api/properties';

const useProperties = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(PROPERTIES_ENDPOINT);

                if (!response.ok) {
                    throw new Error('Unable to fetch properties');
                }

                const properties = await response.json();
                setProperties(properties);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProperties();
    }, []);

    return { properties, isLoading, isError };
};

export default useProperties;
