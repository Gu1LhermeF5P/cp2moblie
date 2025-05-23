import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const JCLAppContext = createContext();

export const JCLAppProvider = ({ children }) => {
  const [JCLCarrinho, setJCLCarrinho] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('JCLCarrinho').then(data => {
      if (data) setJCLCarrinho(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('JCLCarrinho', JSON.stringify(JCLCarrinho));
  }, [JCLCarrinho]);

  return (
    <JCLAppContext.Provider value={{ JCLCarrinho, setJCLCarrinho }}>
      {children}
    </JCLAppContext.Provider>
  );
};