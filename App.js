import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import ProductDetail from './Screens/ProductDetail'
import Beverages from './Screens/Beverages'

const App = () => {
  return (
    <View>
    <ScrollView>
      
    <ProductDetail/>
    <Beverages/>
    
    </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})