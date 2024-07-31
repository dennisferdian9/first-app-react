import {ListCard} from '@/components/ListCard'
import { act } from 'react-dom/test-utils';
import { pokemonModel } from '@/types/pokemon';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';

describe('Detail Modal Component',  () => {
    it('test detail modal props', async () => {
        await act(async () => {
            const pokemonData: pokemonModel = 
                {
                    name: "bulbasaur",
                    id: 1,
                    image: "imageURL",
                    stats:  {},
                    weight: 200,
                    height: 300,
                    abilities: [],
                  }  
            
            
            renderWithProviders(<ListCard pokemon={pokemonData} />)
        });
        await waitFor(() => {
            const inputElement = screen.getByTestId('list-card-container');

            fireEvent.click(inputElement);
            
          });
    })
})