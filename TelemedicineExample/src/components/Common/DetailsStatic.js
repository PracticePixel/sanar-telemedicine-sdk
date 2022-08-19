import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { vw } from '../../utility/viewport-units'
import { profile } from '../../assets/images';
import { theme } from '.';

const DetailsStatic = (props) => {
    const profileImg = props.img ? { uri: props.img } : profile
    return (
        <View style={styles.container}>
            <View style={[styles.boxStyle, props.BoxEditStyle]}>
                <View style={{ flexDirection: "row", marginTop: 20, alignItems: 'center' }}>
                    <View style={styles.imageView}>
                        <Image source={profileImg} style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{ flexDirection: "column", marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, fontFamily: theme.fontFamily.bold }}>{props.name}</Text>
                        <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, color: 'gray' }}>{props.doctorType}</Text>
                    </View>
                </View>
                <Text style={styles.doctorTypeStyle}>{props.visitType}</Text>
                <View style={{ flexDirection: 'row', marginLeft: 5 * vw }}>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, color: 'gray' }}>Home Visit : </Text>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular }}> {props.visit} </Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 5 * vw }}>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, color: 'gray', marginTop: 5 }}>Appoinment ID : </Text>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, marginTop: 5 }}> {props.appoinmentID} </Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 5 * vw, marginBottom: 20 }}>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, color: "grey", marginTop: 5 }}>Patient : </Text>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, marginTop: 5 }}>{props.patient} {`${"(" + props.relation + ")"}`}</Text>
                </View>
                {props.children}
            </View>
        </View>
    )
}

export default DetailsStatic

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.1,
        marginBottom: 20,
    },
    boxStyle: {
        width: 90 * vw,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
    imageView: {
        height: 50, width: 50, justifyContent: "center", alignItems: 'center', elevation: 2, borderRadius: 5, overflow: 'hidden', marginLeft: 5 * vw

    },
    doctorTypeStyle: {
        color: "blue", fontWeight: "bold", fontSize: 13, fontFamily: theme.fontFamily.regular, paddingVertical: 5, paddingHorizontal: 20, marginTop: 10
    },
    footerBox: {
        height: 14 * vw, width: 90 * vw, position: "absolute", bottom: 0, borderRadius: 10, justifyContent: "center",
    },
    footerText: {
        fontSize: 14, color: 'grey', marginLeft: 2 * vw, fontWeight: "800"
    },
    videoCallContainer: {
        height: 28 * vw,
        width: 80 * vw,
        backgroundColor: "lightblue",
        position: "absolute",
        bottom: 0,
        left: 20,
        borderRadius: 10
    }
})
