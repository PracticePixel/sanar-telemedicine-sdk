import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { vw } from '../utility/viewport-units';
import { sandclock, menuIcon, handWave, carIcon, healthIcon, bellIcon, whatsappIcon, diet, notification } from '../assets/images';
import InsuranceComponent from '../components/Common/InsuranceComponent';
const telemedicineIcon = "https://img.litedev.com/images/home-services/telemedicine.png"
import { theme } from '../components/Common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Context from "../Store/Context";

const DashBoardScreen = () => {
    const navigation = useNavigation();
    const { logOut } = useContext(Context);

    const logoutUser = () => {
        logOut(false)
        navigation.goBack()
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => logoutUser()} style={styles.logOutView}>
                        <AntDesign name="poweroff" size={20} color="black" />
                        <Text style={{ fontFamily: theme.fontFamily.regular, paddingLeft: 8 }}>Logout</Text>
                    </TouchableOpacity>
                    <View style={styles.boxstyle}>
                        <View style={{ height: 55, width: 55, backgroundColor: '#A9C8D8', marginLeft: 15, marginRight: 15, justifyContent: "flex-start", borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
                            <Image source={menuIcon} style={{ width: 37, height: 37 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 18, fontFamily: theme.fontFamily.bold }}>Hi,</Text>
                                <Text style={{ fontSize: 18, paddingRight: 6, paddingLeft: 10, fontFamily: theme.fontFamily.bold }}>Abdulrahman</Text>
                                <Image source={handWave} style={{ width: 8 * vw, height: 8 * vw, bottom: 1 * vw }} />
                            </View>
                            <Text style={{ fontFamily: theme.fontFamily.regular }}>Your insurance in one click</Text>
                        </View>
                    </View>
                    <Text style={{ marginTop: 6 * vw, fontSize: 18, fontWeight: 'bold', fontFamily: theme.fontFamily.regular }}>You are Protected by </Text>
                    <View style={{ flexDirection: "row", marginTop: 3 * vw }}>
                        <InsuranceComponent type="Health Insurance" count="0" image={healthIcon} />
                        <InsuranceComponent type="Motors Insurance" count="1" image={carIcon} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Telemedicine', { goTo: 'Booking' })} style={[styles.shadowStyle, { height: 28 * vw, width: 90 * vw, backgroundColor: "rgb(231, 244, 255)", borderRadius: 8, flexDirection: "column", marginTop: 5 * vw, justifyContent: "center", alignItems: "center" }]}>
                        <Image source={{ uri: telemedicineIcon }} style={{ width: 50, height: 50 }} />
                        <Text style={{ lineHeight: 25, fontFamily: theme.fontFamily.regular, fontSize: 17 }}>Telemedicine booking</Text>
                    </TouchableOpacity>
                    <Image source={diet} style={{ width: 90 * vw, height: 150, marginTop: 20, borderRadius: 8 }} />
                    <View style={{ width: 90 * vw, height: 100, backgroundColor: '#e5f1e1', marginTop: 20, borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginLeft: 20, width: 40 * vw, fontFamily: theme.fontFamily.bold }}>
                            Do you have any question ?
                        </Text>
                        <View style={{ backgroundColor: "#7eba6c", width: 40 * vw, height: 40, alignItems: 'center', padding: 10, flexDirection: 'row', borderRadius: 8 }}>
                            <Image source={whatsappIcon} style={{ width: 20, height: 20 }} />
                            <Text style={{ marginLeft: 10, color: '#fff', fontFamily: theme.fontFamily.bold }}>Let us help you</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default DashBoardScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 25 * vw,
        paddingHorizontal: 20,
    },
    boxstyle: {
        height: 80,
        width: 90 * vw,
        backgroundColor: "#ECF3F7",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    shadowStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    logOutView: {
        height: 9 * vw,
        width: 25 * vw,
        position: 'absolute',
        top: -45,
        right: 22,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
    }
})