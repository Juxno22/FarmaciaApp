import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Cargando...</Text>
    </View>
  );
}
