import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { mobileIcon, calendarIcon } from '../../assets/images'
const { width, height } = Dimensions.get('window');

const AppointmentsList = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
            <Text style={styles.text}>Services</Text>
            <View style={styles.box}>
                <TouchableOpacity style={styles.boxList} onPress={() => navigation.navigate('Telemedicine', { goTo: 'Booking' })}>
                    <Image resizeMode='cover' style={styles.img} source={mobileIcon} />
                    <Text style={styles.text1}>Book</Text>
                    <Text style={styles.text1}>Consultation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boxList, { marginLeft: 20 }]} onPress={() => navigation.navigate('Telemedicine', { goTo: 'Appointments' })}>
                    <Image resizeMode='cover' style={styles.img} source={calendarIcon} />
                    <Text style={styles.text1}>View</Text>
                    <Text style={styles.text1}>Appointments</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
);

export default AppointmentsList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainView: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    text1: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    boxList: {
        borderWidth: 1,
        borderColor: 'rgba(128,128,128,0.2)',
        height: 150,
        width: (width - 60) / 2,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        marginTop: 30,
    },
    img: {
        width: 80,
        height: 80,
        marginTop: -50,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(211,211,211,0.3)',
    }
})