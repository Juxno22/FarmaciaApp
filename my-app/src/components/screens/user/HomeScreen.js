import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Bienvenido a Farmacias Vida!</Text>
      <Button title="Buscar Medicamentos" onPress={() => navigation.navigate('Search')} />
    </View>
  );
}