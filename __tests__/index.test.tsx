import '@testing-library/jest-dom'
import Page from '@/page'
import { renderWithProviders } from './test-utils'
import { pokemonModel } from '@/types/pokemon'
import { act } from 'react-dom/test-utils'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { beforeEach } from 'node:test'
import { getPokemonData } from '@/utils/GetPokemonData'

// import * as utils from '@/utils/GetPokemonData/index';

const pokemonData:pokemonModel = {
  name: "bulbasaur",
  id: 1,
  image: "imageURL",
  stats:  {},
  weight: 200,
  height: 300,
  abilities: [],
}  
jest.mock('../app/utils/GetPokemonData/index.ts', () => {
  return {
    getPokemonData: jest.fn(() => ({
      results: [pokemonData],
      next: 'newxtURL',
      prev: 'prevURL'
    }))
  }
})

describe('Page', () => {
  it('renders pokemon list', async () => {
    await act(async () => {
      renderWithProviders(<Page />)
    });
    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    });
  })
  it('input text', async () => {
    await act(async () => {
      renderWithProviders(<Page />)
    });
    await waitFor(() => {
      const inputElement = screen.getByTestId('input-field');
      expect(inputElement).toHaveValue('');

      fireEvent.change(inputElement, { target: { value: 'Hello World' } });
      expect(inputElement).toHaveValue('Hello World');
    });
  })
  it('next prev button', async () => {
    await act(async () => {
      renderWithProviders(<Page />)
    });
    await waitFor(() => {
      const buttonPrev = screen.getByTestId('prev-button');
      fireEvent.click(buttonPrev)

      const buttonNext = screen.getByTestId('next-button');
      fireEvent.click(buttonNext)
    });
  }) 
  it('next prev button', async () => {
    await act(async () => {
      const mockedData = {
        results: [pokemonData],
        next: 'newxtURL',
        prev: 'prevURL'
      };

      getPokemonData.mockResolvedValue(mockedData);

      renderWithProviders(<Page />)
    });
    await waitFor(() => {
      const buttonPrev = screen.getByTestId('prev-button');
      fireEvent.click(buttonPrev)

      const buttonNext = screen.getByTestId('next-button');
      fireEvent.click(buttonNext)
    });
  }) 
})
