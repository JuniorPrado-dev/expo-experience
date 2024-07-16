import { Dimensions, FlatList, StyleSheet, View, ListRenderItemInfo } from 'react-native';
import React, { useRef, useEffect } from 'react';

const { width } = Dimensions.get('window');

interface CarrouselProps {
  data: string[]; // Assumindo que os itens da lista são strings representando cores
}

export default function Carrousel({ data }: CarrouselProps) {
  const flatListRef = useRef<FlatList<string>>(null);
  const currentIndex = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (flatListRef.current) {
        if (currentIndex.current < data.length - 1) {
          currentIndex.current += 1;
        } else {
          currentIndex.current = 0; // Reinicia a lista
        }
        flatListRef.current.scrollToIndex({
          animated: true,
          index: currentIndex.current,
          viewPosition: 0.5, // Alinha o item ao centro
          viewOffset:0.5,
          
        });
      }
    }, 3000); // 3000 ms = 3 segundos
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (flatListRef.current) {
      startAutoScroll();
    }
    return () => stopAutoScroll(); // Limpa o intervalo quando o componente desmonta
  }, [flatListRef.current]);

  const renderItem = ({ item }: ListRenderItemInfo<string>) => (
    <View style={{
      backgroundColor: item,
      height: width / 2.6,
      width: width * 0.9,
      marginHorizontal: 4,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
    }} />
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 4 }}
      scrollEventThrottle={16}
      snapToAlignment={'center'}
      decelerationRate={'normal'} // DecelerationRate mais lenta
      renderItem={renderItem}
      onTouchStart={stopAutoScroll}
      onMomentumScrollEnd={startAutoScroll}
    />
  );
}

const styles = StyleSheet.create({});
