import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { JGLAppContext } from '../context/AppProvider';

export const JGLCarrinhoPage = () => {
  const { JGLCarrinho, setJGLCarrinho } = useContext(JGLAppContext);

  const alterarQuantidade = (produtoId, delta) => {
    const atualizado = JGLCarrinho.map(item =>
      item.id === produtoId ? { ...item, quantidade: Math.max(1, item.quantidade + delta) } : item
    );
    setJGLCarrinho(atualizado);
  };

  const removerProduto = (produtoId) => {
    setJGLCarrinho(JGLCarrinho.filter(p => p.id !== produtoId));
  };

  return (
    <View>
      <FlatList
        data={JGLCarrinho}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.titulo} - Quantidade: {item.quantidade}</Text>
            <Button title="+" onPress={() => alterarQuantidade(item.id, 1)} />
            <Button title="-" onPress={() => alterarQuantidade(item.id, -1)} />
            <Button title="Remover" onPress={() => removerProduto(item.id)} />
          </View>
        )}
      />
    </View>
  );
};