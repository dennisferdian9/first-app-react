import {DetailModal} from '@/components/DetailModal'
import { act } from 'react-dom/test-utils';
import { pokemonModel } from '@/types/pokemon';
import { render, screen, waitFor } from '@testing-library/react';

describe('Detail Modal Component',  () => {
    it('test detail modal props', async () => {
        await act(async () => {
            const pokemonData: pokemonModel = {
                name: "bulbasaur",
                id: 1,
                image: "imageURL",
                stats:  {},
                weight: 200,
                height: 300,
                abilities: [],
              }  
            
            render(<DetailModal detail={pokemonData} />)
        });
        await waitFor(() => {
            expect(screen.getByText('bulbasaur')).toBeInTheDocument();
            
          });
    })
})