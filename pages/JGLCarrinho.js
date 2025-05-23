import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { JGLAppContext } from '../context/AppProvider';

export const JGLCarrinhoPage = () => {
  const { JGLCarrinho, setJGLCarrinho } = useContext(JGLAppContext);

  const alterarQuantidade = (id, delta) => {
    setJGLCarrinho(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantidade: Math.max(1, item.quantidade + delta) } : item
      )
    );
  };

  const removerProduto = (id) => {
    setJGLCarrinho(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={JGLCarrinho}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16 }}>{item.nome}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <View style={{ flexDirection: 'row', marginVertical: 4 }}>
              <Button title="+" onPress={() => alterarQuantidade(item.id, 1)} />
              <Button title="-" onPress={() => alterarQuantidade(item.id, -1)} />
              <Button title="Remover" onPress={() => removerProduto(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};
