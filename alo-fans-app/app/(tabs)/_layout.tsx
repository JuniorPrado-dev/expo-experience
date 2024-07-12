import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false, //mostra cabeçario
      }}>
      <Tabs.Screen
        name="index" //indica componente de rota
        options={{
          title: 'Home', //nome do icone
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'barbell' : 'barbell-outline'} color={"red"} /> //configura cor e icone
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'game-controller' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="viagens"
        options={{
          title: 'Travels',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'airplane' : 'airplane-outline'} color={"pink"} />
          ),
        }}
      />
      <Tabs.Screen
        name="teste"
        options={{
          title: 'Tests',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'warning' : 'warning-sharp'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
