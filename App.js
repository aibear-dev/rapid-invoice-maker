
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InvoiceScreen from './screens/InvoiceScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Create Invoice" component={InvoiceScreen} />
        <Stack.Screen name="Invoice History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
