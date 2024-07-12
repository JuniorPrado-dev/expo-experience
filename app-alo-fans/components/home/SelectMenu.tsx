import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import icons from "../../constants/menu-icons"

export default function SelectMenu() {
  const styleIcmage='size-20 '
  
  return (
    <View className='rounded-3xl shadow-2xl shadow-black  gap-3 bg-white flex justify-center flex-row m-3 p-2  '>
      <Image className={styleIcmage} source={icons.iconMenuEventos as ImageProps}/>
      <Image className={styleIcmage} source={icons.iconMenuMandeAlo as ImageProps}/>
      <Image className={styleIcmage} source={icons.iconMenuAnuncie as ImageProps}/>
      <Image className={styleIcmage} source={icons.iconMenuCadastrar as ImageProps}/>
    </View>
  )
}

const styles = StyleSheet.create({})