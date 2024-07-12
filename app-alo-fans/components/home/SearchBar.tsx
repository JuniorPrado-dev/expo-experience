import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View className=" flex items-center justify-center flex-row m-3">
      <View className="flex-1 flex-row border border-black bg-white rounded-full justify-start items-center ">
        <Ionicons
          name="search"
          color={"#FFAAAA"}
          size={25}
          style={{ marginLeft: 12 }}
        />
          {/* <TextInput
          className="
                    h-14
                    border
                    border-gray-600 
                    rounded-lg 
                    w-full 
                    pr-10 
                    pl-4
                    text-alo-purple
                    "
          /> */}
        <TextInput
          className={"flex-grow text-2xl font-bold text-alo-red-200 p-2 rounded-full bg-white w-12"}
          placeholder=""
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({});
