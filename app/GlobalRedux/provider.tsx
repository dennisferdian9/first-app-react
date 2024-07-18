"use client";
import {Provider } from 'react-redux'
import {store} from './store'
import { ReactNode } from 'react';

interface ProviderProps {
  children?: ReactNode
}

export function Providers(props:ProviderProps) {
  return(
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}