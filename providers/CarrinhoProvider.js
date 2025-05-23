import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const JGLAppContext = createContext();

export const JGLAppProvider = ({ children }) => {
  const [JGLCarrinho, setJGLCarrinho] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('JGLCarrinho').then(data => {
      if (data) setJGLCarrinho(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('JGLCarrinho', JSON.stringify(JGLCarrinho));
  }, [JGLCarrinho]);

  return (
    <JGLAppContext.Provider value={{ JGLCarrinho, setJGLCarrinho }}>
      {children}
    </JGLAppContext.Provider>
  );
};