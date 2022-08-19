import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonPages from '../components/Common/CommonPages'


const Test = () => {
  return (
    <View style={{flex:1}}>
      <CommonPages 
      headerText={"All policies in one place"} 
      subHeaderText={"Keep track of your health policy consumption \n  and vehicle coverage details"}/>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})