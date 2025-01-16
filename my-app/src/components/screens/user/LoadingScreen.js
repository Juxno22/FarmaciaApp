import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
      <Image
        source={require('../../../../assets/inicio.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500, // Ancho de la imagen
    height: 500, // Alto de la imagen
    resizeMode: 'contain', // Ajusta cómo se escala la imagen
  },
});
