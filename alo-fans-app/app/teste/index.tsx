import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const Teste = () => {
  return (
    <SafeAreaView style={{
        display:"flex",
        backgroundColor: "salmon",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
       ,padding: 20
    }}>
        <Text className="text-red-300 bg-white">Teste</Text>  
        <Link href={"../teste/comHead"}>Com Head</Link>
        <Link href={"../teste/semHead"}>Sem Head</Link>
    </SafeAreaView>
  )
}

export default Teste

const styles = StyleSheet.create({})