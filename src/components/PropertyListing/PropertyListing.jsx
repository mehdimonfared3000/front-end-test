import React from 'react';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import PropertyCard from '../PropertyCard';
import { useProperties } from '../../hooks';
import './PropertyListing.scss';

const PropertyListing = () => {
    const { properties, isLoading, isError } = useProperties();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <ErrorMessage />;
    }

    return (
        <ul className="PropertyListing">
            {properties.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
