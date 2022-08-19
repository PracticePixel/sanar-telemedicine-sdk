import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { sandclock } from '../../assets/images';
import { vw } from '../../utility/viewport-units'
const { width, height } = Dimensions.get('window');

const CommonPages = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={[{ height: 180, width: 180 }, props.styleImage]} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={[styles.msgTxt, props.headerStyle]}>{props.headerText}</Text>
                <Text style={[styles.subTextStyle, props.subHeaderStyle]}>{props.subHeaderText}</Text>
            </View>
            <TouchableOpacity onPress={() => props.onPress()}
                style={styles.loginBtn}>
                <Text style={styles.lgnBtnStyle}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

CommonPages.defaultProps = {
    image: sandclock,
    onPress: () => null,
};

export default CommonPages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    msgTxt: {
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 10
    },
    subTextStyle: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "400",
        padding: 5,
        paddingTop: 10,
        lineHeight: 30
    },
    loginBtn: {
        width: 90 * vw,
        height: 50,
        marginTop:40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black'
      },
})