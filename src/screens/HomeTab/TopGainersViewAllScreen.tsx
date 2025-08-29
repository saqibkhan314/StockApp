import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/HomeTabComponents/TopGainersViewAllComponents/Header'
import TopGainersViewAll from '../../components/HomeTabComponents/TopGainersViewAllComponents/TopGainersViewAll'

const TopGainersViewAllScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TopGainersViewAll />
    </View>
  )
}

export default TopGainersViewAllScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,          
    backgroundColor: "#fff",
  },
})