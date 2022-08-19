import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonPages from '../../components/Common/CommonPages';
import { useNavigation } from '@react-navigation/native';


const FindPage = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <CommonPages
                headerText={"Find nearest health providers"}
                subHeaderText={"All health providers covered by your policy\nare in one click away from your location "}
                onPress={()=> navigation.navigate("Receive")} />
        </View>
    )
}

export default FindPage

const styles = StyleSheet.create({})