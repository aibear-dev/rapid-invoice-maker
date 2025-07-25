
import React from 'react';
import { View, Text } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Invoice History</Text>
      <Text>This is where saved invoices will be listed from SQLite.</Text>
    </View>
  );
}
