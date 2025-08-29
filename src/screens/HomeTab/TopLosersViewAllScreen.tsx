import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/HomeTabComponents/TopLosersViewAllComponents/Header'
import TopLosersViewAll from '../../components/HomeTabComponents/TopLosersViewAllComponents/TopLosersViewAll'

const TopLosersViewAllScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopLosersViewAll />
    </View>
  )
}

export default TopLosersViewAllScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,          
    backgroundColor: "#fff",
  },
})