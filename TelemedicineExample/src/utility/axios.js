/**
 * @description Axios Service Utility
 * @author Fahid Mohammad
 */

import { Platform } from 'react-native'
import axios from "axios";
import DeviceInfo from "react-native-device-info"

//  Set token to all header request on-demand
export function setToken(token) {
    axios.defaults.headers.common["Authorization"] = token;
}

export function setSalesChannel(value) {
    axios.defaults.headers.common["platform"] = value
}

axios.interceptors.request.use(
    async config => {
        let buildVersion = await DeviceInfo.getVersion();
        config.headers.common["platform"] = Platform.OS
        config.headers.common['build-version'] = buildVersion
        return config;
    },
    error => Promise.reject(error)
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    create: axios.create,
    setToken,
    setSalesChannel
};