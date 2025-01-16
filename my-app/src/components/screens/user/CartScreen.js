import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function CartScreen() {
  const [cart, setCart] = useState([]);

  const realizarPedido = () => {
    const contieneAntibioticos = cart.some((item) => item.requiere_receta);
    if (contieneAntibioticos) {
      Alert.alert('Advertencia', 'Se necesita receta para realizar este pedido.');
    } else {
      // Lógica para realizar pedido
      Alert.alert('Éxito', 'Pedido realizado con éxito.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Carrito de compras</Text>
      {cart.map((item, index) => (
        <View key={index} style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>{item.nombre}</Text>
          <Text>${item.precio}</Text>
        </View>
      ))}
      <Button title="Realizar Pedido" onPress={realizarPedido} />
    </View>
  );
}