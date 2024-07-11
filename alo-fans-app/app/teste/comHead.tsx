import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const comHead = () => {
  return (
    <SafeAreaView style={{
        display:"flex",
        backgroundColor: "salmon",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
       ,padding: 20
    }}>
      <Text>ComHead</Text>
    </SafeAreaView>
  )
}

export default comHead

const styles = StyleSheet.create({})