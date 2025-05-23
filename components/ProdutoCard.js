import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function ProdutoCard({ produto, aoAdicionar }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: produto.imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{produto.titulo}</Text>
      <Text>{produto.descricao}</Text>
      <Button title="Adicionar" onPress={aoAdicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 10 },
  imagem: { width: '100%', height: 150, borderRadius: 8, resizeMode: 'cover' },
  titulo: { fontWeight: 'bold', fontSize: 16 }
});
