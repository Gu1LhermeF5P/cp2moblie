import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const JCLImageMap = {
  produto1: require('../assets/images/produto1.png'),
  produto2: require('../assets/images/produto2.png'),
};

export const JCLProdutoCard = ({ produto, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(produto)}>
    <Image source={JCLImageMap[produto.imagem]} style={styles.image} />
    <Text>{produto.titulo}</Text>
    <Text>{produto.descricao}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { padding: 10, borderBottomWidth: 1 },
  image: { width: 100, height: 100 },
});