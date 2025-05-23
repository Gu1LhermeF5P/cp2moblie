import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useCarrinho } from '../providers/CarrinhoProvider';

const JGLProdutoCard = ({ produto }) => {
  const { adicionarAoCarrinho } = useCarrinho();

  return (
    <View>
      <Image source={produto.imagem} style={{ width: 100, height: 100 }} />
      <Text>{produto.nome}</Text>
      <Text>{produto.descricao}</Text>
      <Text>R$ {produto.preco}</Text>
      <Button title="Adicionar ao carrinho" onPress={() => adicionarAoCarrinho(produto)} />
    </View>
  );
};

export default JGLProdutoCard;
