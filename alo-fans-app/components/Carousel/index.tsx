import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width } = Dimensions.get('window')
export default function Carrousel({data}) {
  
  return (
    <FlatList
      data={data}
      pagingEnabled //pa
      keyExtractor={(item) => String(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      renderItem={({ item }) => (
        <View style={
          {
            backgroundColor: item,
            height:width/2.6,
            width:width
          }}>
          <Text>{item.title}</Text> 
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({})