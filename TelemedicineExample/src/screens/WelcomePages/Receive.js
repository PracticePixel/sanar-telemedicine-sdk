import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonPages from '../../components/Common/CommonPages';
import { useNavigation } from '@react-navigation/native';

const Receive = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <CommonPages
                headerText={"Receive real time updates"}
                subHeaderText={"Be informed about your recent policy updates\nin real time"}
                onPress={()=> navigation.navigate("LoginScreen")} />
        </View>
    )
}

export default Receive

const styles = StyleSheet.create({})