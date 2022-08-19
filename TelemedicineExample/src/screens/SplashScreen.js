import { View, Text, Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LoginScreen")
        }, 500);
      }, []);
  return (
    <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor:'white'}}>
      <Image style={{width:200, height:200}} source={{uri:"https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/dc/34/ca/dc34ca6b-6b4b-d1bd-0dce-85a8e34dec1f/AppIcon-1x_U007emarketing-0-7-85-220.png/1024x1024bb.png"}} />
    </View>
  )
}

export default SplashScreen