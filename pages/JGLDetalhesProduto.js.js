import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { JGLAppContext } from '../context/AppProvider';

export const JGLDetalhesProduto = ({ route }) => {
  const { produto } = route.params;
  const { JGLCarrinho, setJGLCarrinho } = useContext(JGLAppContext);

  const adicionarProduto = () => {
    const existente = JGLCarrinho.find(p => p.id === produto.id);
    if (existente) {
      existente.quantidade += 1;
      setJGLCarrinho([...JGLCarrinho]);
    } else {
      setJGLCarrinho([...JGLCarrinho, { ...produto, quantidade: 1 }]);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <Image source={{ uri: produto.imagem }} style={{ width: '100%', height: 300 }} />
      <Text style={{ fontSize: 20 }}>{produto.titulo}</Text>
      <Text>{produto.descricao}</Text>
      <Button title="Adicionar ao Carrinho" onPress={adicionarProduto} />
    </View>
  );
};