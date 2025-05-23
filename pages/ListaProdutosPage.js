import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { buscarProdutos } from '../services/ProdutoService';
import { useCarrinho } from '../providers/CarrinhoProvider';
import ProdutoCard from '../components/ProdutoCard';

export default function ListaProdutosPage() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const { adicionarProduto } = useCarrinho();

  useEffect(() => {
    buscarProdutos().then(setProdutos);
  }, []);

  const filtrados = produtos.filter(p =>
    p.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    p.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        value={busca}
        onChangeText={setBusca}
      />
      <FlatList
        data={filtrados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProdutoCard produto={item} aoAdicionar={() => adicionarProduto(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 10 }
});
