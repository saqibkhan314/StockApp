import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeTab/HomeScreen';
import WatchListScreen from '../screens/WatchListTab/WatchListScreen';
import BottomTabs from './BottomTabs';
import TopGainersViewAllScreen from '../screens/HomeTab/TopGainersViewAllScreen';
import TopLosersViewAllScreen from '../screens/HomeTab/TopLosersViewAllScreen';
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import WatchlistDetailScreen from '../screens/WatchListTab/WatchListDetailScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Define your screens here */}
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="WatchList" component={WatchListScreen} /> */}
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="TopGainersViewAll" component={TopGainersViewAllScreen} />
      <Stack.Screen name="TopLosersViewAll" component={TopLosersViewAllScreen} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetailsScreen} />
      <Stack.Screen 
        name="WatchlistDetail" 
        component={WatchlistDetailScreen} 
        options={{ title: 'Watchlist Details' }}
      />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})