import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { JGLAppContext } from '../context/AppProvider';

const produtos = [
  {
    id: 1,
    nome: 'Fone Bluetooth',
    descricao: 'Fone de ouvido sem fio com alta qualidade sonora.',
    preco: 149.99,
    imagem: require('../assets/produto1.jpg'),
  },
  {
    id: 2,
    nome: 'Smartwatch',
    descricao: 'Relógio inteligente com monitoramento de saúde.',
    preco: 249.99,
    imagem: require('../assets/produto2.png'),
  },
];

export const JGLListaProdutos = () => {
  const navigation = useNavigation();
  const { adicionarAoCarrinho } = useContext(JGLAppContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { produto: item })}
    >
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => adicionarAoCarrinho(item)}>
        <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F8',
    padding: 16,
  },
  lista: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagem: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9B59B6',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  preco: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  botao: {
    backgroundColor: '#9B59B6',
    paddingVertical: 10,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
