import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import CommonPages from '../../components/Common/CommonPages';
import { useNavigation } from '@react-navigation/native';

const Policies = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <CommonPages
                headerText={"All policies in one place"}
                subHeaderText={"Keep track of your health policy consumption \n  and vehicle coverage details"}
                onPress={()=> navigation.navigate("FindPage")} />
        </View>
    )
}

export default Policies

const styles = StyleSheet.create({})