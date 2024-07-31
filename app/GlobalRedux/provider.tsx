"use client";
import {Provider } from 'react-redux'
import {setupStore} from './store'
import { ReactNode } from 'react';

interface ProviderProps {
  children?: ReactNode
}



export function Providers(props:ProviderProps) {
  return(
    <Provider store={setupStore({})}>
      {props.children}
    </Provider>
  )
}