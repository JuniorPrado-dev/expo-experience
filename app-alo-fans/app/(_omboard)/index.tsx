//  app/onboarding/index.tsx

import React, { useState } from 'react';
import { View, Text, Image, Pressable, ImageProps } from 'react-native';
import icons from '../../constants/icons';
import AppIntroSlider from 'react-native-app-intro-slider';
import {router} from "expo-router"
interface Slide {
  key: number;
  title: string;
  text: string;
  image: any;
  backgroundColor: string;
}

const slides: Slide[] = [
  {
    key: 1,
    title: 'Bem-vindo ao alô-fans',
    text: 'O app que te conecta com seus\nfãs de forma autêntica e\nengajadora!',
    image: require('../../assets/onboarding/slide1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Sua mensagem no palco',
    text: 'O artista pode ler sua\nmensagem durante uma live ou\nshow, tornando a experiência\nainda mais única.',
    image: require('../../assets/onboarding/slide2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Bem-vindo ao alô-fans',
    text: 'O app que te conecta com seus\nfãs de forma autêntica e\nengajadora!',
    image: require('../../assets/onboarding/slide3.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Uma comunidade vibrante',
    text: 'Expresse seu carinho, faça\nperguntas ou peça um recado\nespecial.',
    image: require('../../assets/onboarding/slide4.png'),
    backgroundColor: '#22bcb5',
  }
];

export default function Onboarding() {
  const [showHome, setShowHome] = useState(false);

  function renderSlides({ item }: { item: Slide }) {
    return (
      <View className="flex-1 items-center bg-white">
        <Image source={item.image} className="h-4/5 w-full" />
        <Text className="text-2xl font-bold mt-[-75]">{item.title}</Text>
        <Text className="text-lg text-center m-5">{item.text}</Text>
      </View>
    );
  }

  const renderNextButton = () => {
    return (
      <View className="mt-1 w-11 h-11 bg-black/20 font-bold rounded-full justify-center items-center">
        <Image source={icons.rightArrow as ImageProps} className="w-6 h-6" />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <Text className="text-lg p-3 text-center mt-1 font-pbold ">Acessar!</Text>
    );
  };

  const renderSkipButton = () => {
    return (
      <Text className="text-lg p-3 text-black text-center mt-0">Pular!</Text>
    );
  };

  const handleDone = () => {
    router.navigate("../(tabs)")
  };
  
  if (showHome) {
    return <Text> Entrou na Home </Text>;
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#9362D9',
          width: 30,
        }}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        renderSkipButton={renderSkipButton}
        onDone={handleDone}
        onSkip={handleDone}
        showSkipButton={true}
      />
    );
  }
}
