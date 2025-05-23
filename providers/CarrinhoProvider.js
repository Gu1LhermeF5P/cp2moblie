import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarProduto = produto => {
    setCarrinho(prev => {
      const existente = prev.find(p => p.produto.id === produto.id);
      if (existente) {
        return prev.map(p =>
          p.produto.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        );
      }
      return [...prev, { produto, quantidade: 1 }];
    });
  };

  const removerProduto = id => {
    setCarrinho(prev => prev.filter(p => p.produto.id !== id));
  };

  const alterarQuantidade = (id, delta) => {
    setCarrinho(prev =>
      prev
        .map(p =>
          p.produto.id === id ? { ...p, quantidade: p.quantidade + delta } : p
        )
        .filter(p => p.quantidade > 0)
    );
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, removerProduto, alterarQuantidade }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
