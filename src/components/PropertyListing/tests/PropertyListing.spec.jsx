import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import { PROPERTIES_ENDPOINT } from '../../../hooks/useProperties/useProperties';

describe('PropertyListing', () => {
    const properties = [
        {
            id: 73864112,
            bedrooms: 3,
            summary: 'Situated moments from the River Thames in Old Chelsea',
            displayAddress: 'CHEYNE WALK, CHELSEA, SW3',
            propertyType: 'Flat',
            price: 1950000,
            branchName: 'M2 Property, London',
            propertyUrl: '/property-for-sale/property-73864112.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
            propertyTitle: '3 bedroom flat for sale',
            mainImage: 'https://media.rightmove.co.uk/property-73864112.jpg',
        },
        {
            id: 59309477,
            bedrooms: 2,
            summary: 'This well presented and modern two bedroom flat',
            displayAddress: 'Renaissance, Lewisham, SE13',
            propertyType: 'Flat',
            price: 599950,
            branchName: 'Foxtons, Blackheath',
            propertyUrl: '/property-for-sale/property-59309477.html',
            contactUrl: '/property-for-sale/contactBranch.html?propertyId=59309477',
            propertyTitle: '2 bedroom flat for sale',
            mainImage: 'https://media.rightmove.co.uk/property-59309477.jpg',
        },
    ];

    beforeEach(() => {
        jest.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(properties),
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render loading state while properties are being fetched', () => {
        fetch.mockReturnValue(new Promise(() => {}));

        render(<PropertyListing />);

        expect(screen.getByText('Loading properties...')).toBeInTheDocument();
    });

    it('should render property cards returned from the api', async () => {
        render(<PropertyListing />);

        const propertiesList = await screen.findByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');

        expect(fetch).toHaveBeenCalledWith(PROPERTIES_ENDPOINT);
        expect(propertyCards).toHaveLength(properties.length);
        expect(screen.getByText('3 bedroom flat for sale')).toBeInTheDocument();
        expect(screen.getByText('2 bedroom flat for sale')).toBeInTheDocument();
    });

    it('should render an error state when properties cannot be fetched', async () => {
        fetch.mockRejectedValue(new Error('Request failed'));

        render(<PropertyListing />);

        expect(await screen.findByRole('alert')).toHaveTextContent('Unable to load properties.');
    });
});
