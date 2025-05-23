import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JGLAppProvider, JGLAppContext } from './context/AppProvider.js';
import { JGLListaProdutos } from './pages/JGLListaProdutos.js';
import { JGLDetalhesProduto } from './pages/JGLDetalhesProduto.js';
import { JGLCarrinhoPage } from './pages/JGLCarrinhoPage.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#9B59B6',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Produtos') {
            iconName = 'pricetags-outline';
          } else if (route.name === 'Carrinho') {
            iconName = 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Produtos" component={ListaStack} />
      <Tab.Screen
        name="Carrinho"
        component={JGLCarrinhoPage}
        options={{
          tabBarBadge: JGLCarrinho.length > 0 ? JGLCarrinho.length : undefined,
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
