import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <View className="flex-1 bg-purple-500 items-center justify-center">
      <Image
        source={require('../assets/images/logo-completa.png')}
        className="w-80 h-80 mb-5" // ajuste a largura e altura conforme necessário
        resizeMode="contain"
      />
      <ActivityIndicator
        size="large"
        color="#FFFFFF"
      />
    </View>
  );
}
