import http from '../../utility/axios';
import { EndPoint } from '../../utility/constants'
import { SanarTelemedicine } from 'react-native-sanar-telemedicine-rc';

export async function getAppointmentsData(args) {
    console.log('get apmnt call : ', decodeURIComponent(SanarTelemedicine.session.token));
    http.setToken(decodeURIComponent(SanarTelemedicine.session.token))
    return await http.post(EndPoint.appointments, args)
}

export async function getAppointmentDetailsData(args) {
    console.log('get apmnt call : ', decodeURIComponent(SanarTelemedicine.session.token));
    http.setToken(decodeURIComponent(SanarTelemedicine.session.token))
    return await http.post(EndPoint.appointmentDetails, args)
}

export async function userLogin(args) {
    return await http.post(EndPoint.userLogin, args)
}

export async function signIn(args) {
    try {
        const { data } = await userLogin(args)
        if (data.status === 1000) {
            return { error: this.error, response: data.data, }
        } else {
            return { error: this.error, message: this.message }
        }
    } catch (error) {
        return { error: this.error, message: this.message }
    }
}

export async function getAppointments(args) {
    try {
        const { data } = await getAppointmentsData(args)
        if (data.status === 1000) {
            return { error: this.error, response: data.data, }
        } else {
            return { error: this.error, message: this.message }
        }
    } catch (error) {
        return { error: this.error, message: this.message }
    }
}

export async function getAppointmentDetails(args) {
    try {
        const { data } = await getAppointmentDetailsData(args)
        if (data.status === 1000) {
            return { error: this.error, response: data.data, }
        } else {
            return { error: this.error, message: this.message }
        }
    } catch (error) {
        return { error: this.error, message: this.message }
    }
}