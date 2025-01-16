import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';

export default function SearchScreen({ navigation }) {
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/user/medicamentos')
      .then((response) => response.json())
      .then((data) => setMedicamentos(data));
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput placeholder="Buscar medicamentos" style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <FlatList
        data={medicamentos}
        keyExtractor={(item) => item.id_medicamento.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.nombre}</Text>
            <Text>${item.precio}</Text>
            <Button title="Agregar al carrito" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}