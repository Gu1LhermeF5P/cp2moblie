import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import { JGLProdutoCard } from '../components/JGLProdutoCard';
import produtosData from '../data/produtos.json';

export const JGLListaProdutos = ({ navigation }) => {
  const [JGLBusca, setJGLBusca] = useState('');
  const [JGLFiltrados, setJGLFiltrados] = useState(produtosData);

  useEffect(() => {
    const resultado = produtosData.filter(p =>
      (p.titulo + p.descricao).toLowerCase().includes(JGLBusca.toLowerCase())
    );
    setJGLFiltrados(resultado);
  }, [JGLBusca]);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Buscar produto"
        value={JGLBusca}
        onChangeText={setJGLBusca}
        style={{ margin: 10, borderWidth: 1, padding: 8 }}
      />
      <FlatList
        data={JGLFiltrados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <JGLProdutoCard
            produto={item}
            onPress={produto => navigation.navigate('Detalhes', { produto })}
          />
        )}
      />
    </View>
  );
};