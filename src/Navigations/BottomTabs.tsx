import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeTab/HomeScreen';
import WatchListScreen from '../screens/WatchListTab/WatchListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, // Hides the "Home", "Message" text
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home" // FontAwesome icon name
              size={24} // icon size
              color={focused ? '#000' : '#ccc'} // active/inactive color
            />
          ),
        }}
      />

      <Tab.Screen
        name="WatchList"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bookmark" // another FontAwesome icon
              size={24}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
