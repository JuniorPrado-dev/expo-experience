import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carrousel from "@/components/Carousel";

export default function index() {
  interface CarouselProps {
    data: string[];
  }
  const data = [
    "#FF6633",
    "#99CC00",
    "#6699FF",
    "#FF9900",
    "#999999",
    "#9933CC",
  ];

  return (
    <SafeAreaView>
      <Carrousel data={data}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
