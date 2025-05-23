import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ListaProdutosPage from './pages/ListaProdutosPage';
import CarrinhoPage from './pages/CarrinhoPage';
import { CarrinhoProvider } from './providers/CarrinhoProvider';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName = route.name === 'Lista' ? 'list' : 'cart';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#00C247',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Lista" component={ListaProdutosPage} />
          <Tab.Screen name="Carrinho" component={CarrinhoPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </CarrinhoProvider>
  );
}
