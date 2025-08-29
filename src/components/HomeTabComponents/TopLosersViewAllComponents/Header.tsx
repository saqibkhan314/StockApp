import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.appName}>Top Losers</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
})