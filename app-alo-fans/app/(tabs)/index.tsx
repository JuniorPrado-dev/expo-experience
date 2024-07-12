import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectMenu from "@/components/home/SelectMenu";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import SearchBar from "@/components/home/SearchBar";

export default function index() {
  
  
  return (
    <SafeAreaView>
      <LinearGradient colors={["#581A8C", "#FFFF"]}>
        <View className=" flex items-center justify-center flex-row m-3">
          <View>
            <Ionicons name="location" color={'white'} size={20} />
          </View>
        </View>
        <SearchBar/>
        <SelectMenu />
       
      </LinearGradient>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
