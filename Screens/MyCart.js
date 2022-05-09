import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyCart = ({route}) => {
  console.log(route.params.DATA)
  return (
    <View>
      <Text>MyCart</Text>
    </View>
  )
}

export default MyCart

const styles = StyleSheet.create({})