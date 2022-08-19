import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { vw } from '../../utility/viewport-units';
import { profile } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { theme } from '.';

const AppoinmentComponent = (props) => {
    const { data, status, upcoming } = props
    const navigation = useNavigation();

    const Appointmtcell = ({ item, index }) => {
        const drName = item.e_info.nme
        const Designation = item.e_info.classification
        const relation = item.patientDetails[0].relation
        const patientName = item.patientDetails[0].name
        const service_name = item.service_name
        const apnt_detils = item.apnt_detils
        const statusText = item.apnt_status_text
        const apnt_id = item.apnt_id
        const img = item.e_info.img
        const profileImg = img ? { uri: img } : profile

        const statusBgColr = getAppointmentStatusStyle(status);

        return (
            <TouchableOpacity
                onPress={() => upcoming && navigation.navigate("UpcomingPage", { data: item, status: status })} 
                style={styles.boxStyle} >
                <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                    <View style={styles.imageView}>
                        <Image source={profileImg} resizeMode={'center'} style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{ flexDirection: "column", marginLeft: 10, padding: 5 }}>
                        <Text style={{ fontSize: 15, fontFamily: theme.fontFamily.regular }}>{drName}</Text>
                        <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular, color: 'gray' }}>{Designation}</Text>
                    </View>
                </View>
                <Text style={styles.doctorTypeStyle}>{service_name}</Text>
                <View style={{ flexDirection: 'row', marginLeft: 5 * vw, paddingVertical: 5 }}>
                    <Text style={{ fontSize: 13, color: "grey", fontFamily: theme.fontFamily.regular }}>{apnt_detils[0].key}</Text>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular }}>{apnt_detils[0].value}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 5 * vw, paddingVertical: 5 }}>
                    <Text style={{ fontSize: 13, color: "grey", fontFamily: theme.fontFamily.regular }}>{apnt_detils[1].key}</Text>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular }}>{apnt_detils[1].value}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 5 * vw, paddingVertical: 5 }}>
                    <Text style={{ fontSize: 13, color: "grey", fontFamily: theme.fontFamily.regular }}>Patient : </Text>
                    <Text style={{ fontSize: 13, fontFamily: theme.fontFamily.regular }}>{patientName} {`${"(" + relation + ")"}`}</Text>
                </View>
                <View style={[styles.footerBox, { backgroundColor: statusBgColr }]}>
                    <Text style={styles.footerText}>{statusText}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const getAppointmentStatusStyle = (index) => {
        switch (index) {
            case "0":
                return theme.colors.lightGreyBlue;
            case "1":
                return theme.colors.completedColor;
            case "2":
                return theme.colors.cancelColor;
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                extraData={data}
                renderItem={(item, i) => Appointmtcell(item, i)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={()=> <View style={{marginVertical: 100}}>
                        <Text style={{ fontFamily: theme.fontFamily.regular, fontSize: theme.fonts.font12, color: 'gray' }}>No Appoinments</Text>
                    </View>
                }
            />
        </View>
    )
}

export default AppoinmentComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    boxStyle: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        borderWidth: 1,
        borderColor: '#F3F3F3',
        marginTop: 20
    },
    imageView: {
        height: 50, width: 50, justifyContent: "center", alignItems: 'center', elevation: 2, borderRadius: 5, marginLeft: 5 * vw, overflow: 'hidden'

    },
    doctorTypeStyle: {
        color: "blue", fontWeight: "bold", fontSize: 13, fontFamily: theme.fontFamily.regular, paddingVertical: 5, paddingHorizontal: 20
    },
    footerBox: {
        height: 14 * vw, width: 90 * vw, bottom: 0, borderRadius: 10, justifyContent: "center", paddingHorizontal: 10, backgroundColor: '#E5F3FF', marginTop: 10
    },
    footerText: {
        fontSize: 13, color: 'grey', marginLeft: 2 * vw, fontWeight: "400", fontFamily: theme.fontFamily.regular
    }
})

