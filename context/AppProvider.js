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

  const adicionarAoCarrinho = (produto) => {
    const existente = JGLCarrinho.find(item => item.id === produto.id);
    if (existente) {
      const atualizado = JGLCarrinho.map(item =>
        item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
      );
      setJGLCarrinho(atualizado);
    } else {
      setJGLCarrinho([...JGLCarrinho, { ...produto, quantidade: 1 }]);
    }
  };

  return (
    <JGLAppContext.Provider value={{ JGLCarrinho, setJGLCarrinho, adicionarAoCarrinho }}>
      {children}
    </JGLAppContext.Provider>
  );
};
