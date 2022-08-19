import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import DetailsStatic from '../../components/Common/DetailsStatic';
import { vw } from '../../utility/viewport-units';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { chat, whtsapp } from '../../assets/images'
import { useNavigation } from '@react-navigation/native';
import { SanarTelemedicine } from 'react-native-sanar-telemedicine-rc'
import { theme } from '../../components/Common';
import { getAppointmentDetails } from '../../services/appointment';

const UpcomingPage = ({ route }) => {
    const { data, status } = route.params
    const navigation = useNavigation();
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            let obj = { "apnt_id": data.apnt_id }
            const { response } = await getAppointmentDetails(obj)
            setLoading(false)
            setDetails(response)
            console.log(response)
        }
        fetchData();
    }, [])

    const drName = data.e_info.nme
    const Designation = data.e_info.classification
    const img = data.e_info.img
    const relation = data.patientDetails[0].relation
    const patientName = data.patientDetails[0].name
    const service_name = data.service_name
    const apnt_detils = data.apnt_detils
    const apnt_id = data.apnt_id
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            {loading ? <ActivityIndicator size={'large'} color='#0909FF' />
                :
                <View style={{ flex: 1 }}>
                    <DetailsStatic name={drName} img={img} doctorType={Designation} visitType={service_name} visit={apnt_detils[0].value} appoinmentID={apnt_detils[1].value} patient={patientName} relation={relation}>
                        {status == '0' ?
                            <TouchableOpacity style={styles.videoCallContainer} onPress={() => navigation.navigate('Telemedicine', { goTo: 'Chat', uid: details.uid, apnt_id: apnt_id })}>
                                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, fontFamily: theme.fontFamily.medium, }}>Touch With doctor</Text>
                                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, marginTop: 5, color: 'gray' }}>Video consultation wiil be active at the time of the appoinment</Text>
                                </View>
                                <View style={{ height: 50, width: 50, backgroundColor: 'blue', borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
                                    <AntDesign name="videocamera" size={25} color="white" />
                                </View>
                            </TouchableOpacity>
                            :
                            status == '1' ?
                                // <TouchableOpacity style={styles.completeBtn} onPress={() => navigation.navigate('Telemedicine', { goTo: 'Chat', uid: uid, apnt_id: apnt_id })}>
                                //     <AntDesign name="message1" size={25} color="blue" />
                                //     <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, marginLeft: 10 }}>Chat history</Text>
                                // </TouchableOpacity>
                                null
                                :
                                null
                        }
                    </DetailsStatic>
                    {status == '0' &&
                        <>
                            <View style={[styles.boxStyle]}>
                                <Text style={{ fontSize: 15, fontFamily: theme.fontFamily.medium }}>Patient Details</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, marginTop: 5 }}>{patientName}</Text>
                                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, marginTop: 5, marginLeft: 5, color: theme.colors.primary }}>{`${"(" + relation + ")"}`}</Text>
                                </View>
                                <Text style={{ fontSize: 15, fontFamily: theme.fontFamily.medium, marginTop: 10 }}>Reports</Text>
                                <TouchableOpacity style={{ height: 100, width: 100, borderRadius: 8, borderWidth: 1, borderColor: 'lightgrey', marginTop: 20, justifyContent: 'center', alignItems: "center" }}>
                                    <AntDesign name="upload" size={25} color="lightblue" />
                                    <Text style={{ color: "blue", marginTop: 8, fontFamily: theme.fontFamily.regular }}>Upload</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 20, alignItems: 'center' }}>
                                <AntDesign name="calendar" size={25} color="lightgreen" />
                                <Text style={{ color: 'blue', marginLeft: 10, fontFamily: theme.fontFamily.regular }}>Add to calender</Text>
                            </View>
                            <View style={styles.supportContainer}>
                                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", marginTop: 20 }}>
                                    <Image source={chat} style={{ width: 30, height: 30 }} />
                                    <Text style={{ fontSize: 13, marginLeft: 10, fontFamily: theme.fontFamily.regular }}>Need help with your appoinment</Text>
                                </View>
                                <View style={{ height: 10 * vw, width: 60 * vw, backgroundColor: "white", marginTop: 20, marginBottom: 20, borderRadius: 8, justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                                    <Image source={whtsapp} style={{ width: 30, height: 30 }} />
                                    <Text style={{ fontFamily: theme.fontFamily.regular }}>Contact us on Whatsapp</Text>
                                </View>
                            </View>
                        </>
                    }
                </View>
            }
        </ScrollView>
    )
}

export default UpcomingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    boxStyle: {
        borderRadius: 8,
        padding: 20,
        marginLeft: 5,
        marginTop: 10,
        backgroundColor: 'white',
        width: 90 * vw,
        borderWidth: 1,
        borderColor: theme.colors.borderColor
    },
    supportContainer: {
        width: 90 * vw,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        marginLeft: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoCallContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 22 * vw,
        width: 80 * vw,
        backgroundColor: "#E5F3FF",
        marginTop: 30,
        bottom: 20,
        marginLeft: 20,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    completeBtn: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: theme.colors.borderGray,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        marginBottom: 30,
        width: '90%',
        alignSelf: 'center'
    }
})