import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JGLCartProvider, JGLCartContext } from './jgl_application/jgl_context/jgl_CartContext';
import { JGLProductListScreen } from './jgl_presentation/jgl_screens/jgl_ProductListScreen';
import { JGLProductDetailScreen } from './jgl_presentation/jgl_screens/jgl_ProductDetailScreen';
import { JGLCartScreen } from './jgl_presentation/jgl_screens/jgl_CartScreen';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const JGLProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="JGLLista" component={JGLProductListScreen} />
    <Stack.Screen name="JGLDetalhes" component={JGLProductDetailScreen} />
  </Stack.Navigator>
);

const JGLTabNavigator = () => {
  const { jglCart } = useContext(JGLCartContext);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Produtos" component={JGLProductStack} />
      <Tab.Screen
        name="Carrinho"
        component={JGLCartScreen}
        options={{ tabBarBadge: jglCart.length > 0 ? jglCart.length : undefined }}
      />
    </Tab.Navigator>
  );
};

export default function JGLApp() {
  return (
    <JGLCartProvider>
      <NavigationContainer>
        <JGLTabNavigator />
      </NavigationContainer>
    </JGLCartProvider>
  );
}
