import React, { useEffect, useState, useContext } from 'react';
import SanarRTC, { SanarTelemedicine } from "react-native-sanar-telemedicine-rc";
import MyStack from '../router';
import Context from "../Store/Context";

const userDetails = {
    "first_name": "Abdul",
    "last_name": "Aziz",
    "dob": "1994-08-13",
    "gender": "M",
    "nationality": "Saudi Arabia",
    "document_id": "2469433110",
    "mid": "MG1",
    "document_type": 1,
    "phone_code": "91",
    "phone_no": "9999999999",
    "maritalStatus": "0"
}

const RootScreen = () => {
    const [connect, setConnect] = useState(false);
    const { isLogin } = useContext(Context);

    useEffect(() => {
        if (isLogin) {
            SanarTelemedicine.Connect(
                "your_client_id", 
                userDetails
                ).then(({message, status, error_message}) => {
                    console.log('connection status : ',status);
                    if(status) {
                        setConnect(status);
                    } else {
                        console.log(error_message);
                    }
                }).catch(e => console.log(e));
        } else {
            setConnect(false);
        }
    }, [isLogin]);

    return (
        <React.Fragment>
            <MyStack />
            <SanarRTC enable={connect} />
        </React.Fragment>
    );
}

export default RootScreen;