import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, {useState, useEffect } from 'react'
import database from '@react-native-firebase/database';


const Orders = () => {

  const [data , setData] = useState()


  useEffect(()=> {
    readUserData()
  }, [])

  const readUserData = async () => {
    database().ref('/Orders/')
    .on('value', snapshot => {
    //  console.log("data ====>>>",Object.values(snapshot.val()))
    setData(Object.values(snapshot.val()))
   });
   };

   

  return (
    <FlatList
  />
  )
}

export default Orders

const styles = StyleSheet.create({})