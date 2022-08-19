import React from "react";
import { SafeAreaView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SanarBooking, SanarChat, SanarAppointments } from 'react-native-sanar-telemedicine-rc';

const Telemedicine = ({ route }) => {
    const navigation = useNavigation();
    const { goTo, uid, apnt_id } = route.params
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {goTo == 'Booking' ?
                <SanarBooking
                    enable={true}
                    onEndFlow={() => navigation.goBack()}
                />
                :
                goTo == 'Chat' ?
                    <SanarChat
                        empId={uid}
                        appointmentId={apnt_id}
                        enable={true}
                        onEndFlow={() => navigation.goBack()}
                    />
                    :
                    <SanarAppointments
                        enable={true}
                        onEndFlow={() => navigation.goBack()}
                    />
            }
        </View>
    )
}

export default Telemedicine;