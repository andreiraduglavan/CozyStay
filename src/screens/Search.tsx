import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    color: theme.colors.text
  }
})

export default Search