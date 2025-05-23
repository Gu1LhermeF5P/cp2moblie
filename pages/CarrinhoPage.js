import React from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { useCarrinho } from '../providers/CarrinhoProvider';

export default function CarrinhoPage() {
  const { carrinho, removerProduto, alterarQuantidade } = useCarrinho();

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        keyExtractor={item => item.produto.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titulo}>{item.produto.titulo}</Text>
            <Text>Qtd: {item.quantidade}</Text>
            <View style={styles.botoes}>
              <Button title="+" onPress={() => alterarQuantidade(item.produto.id, 1)} />
              <Button title="-" onPress={() => alterarQuantidade(item.produto.id, -1)} />
              <Button title="Remover" onPress={() => removerProduto(item.produto.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { marginBottom: 15, padding: 10, backgroundColor: '#eee', borderRadius: 8 },
  titulo: { fontSize: 18, fontWeight: 'bold' },
  botoes: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }
});
