import AsyncStorage from '@react-native-async-storage/async-storage';

export async function buscarProdutos() {
  const json = await AsyncStorage.getItem('produtos');
  if (json) return JSON.parse(json);

  const dados = [
    { id: 1, titulo: 'Fone Bluetooth', descricao: 'Fone com cancelamento de ruído', imagem: 'https://via.placeholder.com/300' },
    { id: 2, titulo: 'Relógio Smart', descricao: 'Relógio com monitor cardíaco', imagem: 'https://via.placeholder.com/300' }
  ];
  await AsyncStorage.setItem('produtos', JSON.stringify(dados));
  return dados;
}
