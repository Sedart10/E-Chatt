import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>

      <Tabs.Screen
        name="Contacts"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ color }) => <Feather name="users" size={24} color="white" />,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Chat-AI',
          tabBarIcon: ({ color }) => <Entypo name="chat" size={24} color="white" />,
        }}
      />

      <Tabs.Screen
        name="Calls"
        options={{
          title: 'Calls',
          tabBarIcon: ({ color }) => <Feather name="phone-call" size={24} color="white" />,
        }}
      />

      <Tabs.Screen
        name="Status"
        options={{
          title: 'Status',
          tabBarIcon: ({ color }) => <MaterialIcons name="motion-photos-on" size={24} color="white" />
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="white" />,
        }}
      />
    </Tabs>
  );
}