import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { JGLAppContext } from '../context/AppProvider';

export const JGLDetalhesProduto = ({ route }) => {
  const { produto } = route.params;
  const { adicionarAoCarrinho } = useContext(JGLAppContext);

  return (
    <View style={{ padding: 16 }}>
      <Image source={produto.imagem} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 8 }}>{produto.nome}</Text>
      <Text style={{ fontSize: 16, color: '#555' }}>{produto.descricao}</Text>
      <Text style={{ fontSize: 18, fontWeight: '600', marginVertical: 10 }}>R$ {produto.preco.toFixed(2)}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => adicionarAoCarrinho(produto)} />
    </View>
  );
};
