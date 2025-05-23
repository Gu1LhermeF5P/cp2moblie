import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { JGLAppContext } from '../context/AppProvider';

export const JGLCarrinhoPage = () => {
  const { JGLCarrinho, setJGLCarrinho } = useContext(JGLAppContext);

  const alterarQuantidade = (id, delta) => {
    setJGLCarrinho(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, item.quantidade + delta) }
          : item
      )
    );
  };

  const removerProduto = (id) => {
    setJGLCarrinho(prev => prev.filter(item => item.id !== id));
  };

  const valorTotal = JGLCarrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Carrinho</Text>
      <FlatList
        data={JGLCarrinho}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={<Text style={styles.vazio}>Seu carrinho está vazio.</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.quantidade}>Qtd: {item.quantidade}</Text>
              <Text style={styles.precoUnit}>
                Unitário: R$ {item.preco.toFixed(2)}
              </Text>
              <Text style={styles.totalItem}>
                Total: R$ {(item.preco * item.quantidade).toFixed(2)}
              </Text>
              <View style={styles.botoes}>
                <TouchableOpacity onPress={() => alterarQuantidade(item.id, 1)} style={styles.btn}>
                  <Text style={styles.btnTexto}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alterarQuantidade(item.id, -1)} style={styles.btn}>
                  <Text style={styles.btnTexto}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removerProduto(item.id)} style={styles.btnRemover}>
                  <Text style={styles.btnTexto}>Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      {JGLCarrinho.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalTexto}>Total do carrinho:</Text>
          <Text style={styles.totalValor}>R$ {valorTotal.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F0F8', padding: 16 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#9B59B6' },
  lista: { paddingBottom: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  imagem: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 6,
    marginRight: 12,
  },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  quantidade: { fontSize: 14, marginVertical: 2 },
  precoUnit: { fontSize: 14, color: '#666' },
  totalItem: { fontSize: 14, fontWeight: '600', color: '#000' },
  botoes: { flexDirection: 'row', marginTop: 8 },
  btn: {
    backgroundColor: '#9B59B6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 6,
  },
  btnRemover: {
    backgroundColor: '#E74C3C',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  btnTexto: { color: '#fff', fontWeight: 'bold' },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 16,
    marginTop: 8,
    alignItems: 'center',
  },
  totalTexto: { fontSize: 18, fontWeight: 'bold' },
  totalValor: { fontSize: 18, fontWeight: 'bold', color: '#27AE60' },
  vazio: { textAlign: 'center', color: '#777', marginTop: 40 },
});
