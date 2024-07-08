import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);

  return (
    <SafeAreaView
      className={`w-full h-full mx-1 my-1 flex-1 ${darkMode ? "bg-secondaryDark" : "bg-secondary"} center`}
    >
      <View className={`h-full w-full ${darkMode ? "bg-secondaryDark" : "bg-secondary"}`}>
        <View className="flex-row center">
          <Checkbox
            className={`m-1 border-1 ${darkMode ? "border-secondaryDark" : "bg-secondary"}`}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text className={`text-base ${darkMode ? "text-primaryDark" : "text-primary"}`}>
            Normal checkbox
          </Text>
        </View>
        <View className="flex-row center">
          <Checkbox
            className={`m-1 border-1 ${darkMode ? "border-secondaryDark" : "bg-secondary"}`}
            value={isChecked1}
            onValueChange={setChecked1}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text className={`text-base ${darkMode ? "text-primaryDark" : "text-primary"}`}>
            Custom colored checkbox
          </Text>
        </View>
        <View className="flex-row center">
          <Checkbox
            className={`m-1 border-1 ${darkMode ? "border-secondaryDark" : "bg-secondary"}`}
            disabled={!(isChecked && isChecked1)}
            value={isChecked2}
            onValueChange={setChecked2}
          />
          <Text className={`text-base ${darkMode ? "text-primaryDark" : "text-primary"}`}>
            Disabled checkbox
          </Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => setDarkMode(!darkMode)}
            className={` p-2 w-full border-2 border-primary${
              darkMode ? "Dark" : " "
            } p bg-secondary${darkMode ? "Dark" : " "} items-center`}
          >
            <Text className={`${darkMode ? "text-primaryDark" : "text-primary"}`}>
              {darkMode?"Tema claro":"Tema Escuro"}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
