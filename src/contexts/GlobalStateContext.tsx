'use client'

import React, { createContext, useState, useContext } from 'react';
import { GlobalState } from '../types/types.d';
import { ReactNode } from 'react'; // Dodaj import za ReactNode

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => { // Koristi ReactNode umesto any
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = (): void => {
    setModalOpen(prevState => !prevState);
  };

  const toggleMenu = (): void => {
    setMenuOpen(prevState => !prevState);
  };

  const exitMenu = (): void => {
    setMenuOpen(false);
  };

  const exitModal = (): void => {
    setModalOpen(false);
  };

  const value: GlobalState = {
    isMenuOpen,
    toggleMenu,
    isModalOpen,
    toggleModal,
    exitMenu,
    exitModal,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};
