import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AllWatchList from '../../components/WatchListTabComponents/AllWatchList'
import { useWatchlist } from '../../context/WatchlistContext';

const WatchListScreen = () => {
  return (
    <View style={styles.container}>
      <AllWatchList />
    </View>
  )
}

export default WatchListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})