import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JGLAppProvider } from './context/AppProvider';
import { JGLListaProdutos } from './pages/JGLListaProdutos';
import { JGLDetalhesProduto } from './pages/JGLDetalhesProduto';
import { JGLCarrinhoPage } from './pages/JGLCarrinho';
import { Text } from 'react-native';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ListaStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Lista" component={JGLListaProdutos} />
    <Stack.Screen name="Detalhes" component={JGLDetalhesProduto} />
  </Stack.Navigator>
);

const TabNavigator = () => {
  const { JGLCarrinho } = useContext(JGLAppContext);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Produtos" component={ListaStack} />
      <Tab.Screen
        name="Carrinho"
        component={JGLCarrinhoPage}
        options={{
          tabBarBadge: JGLCarrinho.length > 0 ? JGLCarrinho.length : undefined
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <JGLAppProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </JGLAppProvider>
  );
}