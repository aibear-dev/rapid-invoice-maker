
import React from 'react';
import { View, Text } from 'react-native';

export default function InvoiceScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Invoice Generator</Text>
      <Text>This is where invoice form and PDF export will appear.</Text>
    </View>
  );
}
