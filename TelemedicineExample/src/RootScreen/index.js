import React, { useEffect, useState, useContext } from 'react';
import SanarRTC, { SanarTelemedicine } from "react-native-sanar-telemedicine-rc";
import MyStack from '../router';
import Context from "../Store/Context";

const userDetails = {
    "first_name": "Medgulf",
    "last_name": "Aug 17th mid",
    "dob": "1994-08-13",
    "gender": "M",
    "nationality": "Saudi Arabia",
    "document_id": "2469433110",
    "mid": "MG1",
    "document_type": 1,
    "phone_code": "91",
    "phone_no": "8179477111",
    "maritalStatus": "0"
}

const RootScreen = () => {
    const [connect, setConnect] = useState(false);
    const { isLogin } = useContext(Context);

    useEffect(() => {
        if (isLogin) {
            console.log('login status : ', isLogin)
            SanarTelemedicine.Connect(
                "c8NQD9ugZ72FV1dRdFcUypLzhjg7jS4Oymvur33xgo/NPawk+4rDLlLFl5GIW22e4e2C2Ae48fMgr3x+UiJSzLFkcZf69Cpzpf5oFEe4pU6yQhnbQkGf5ba+bYC+VtUgHO8uNeHqbrbH7MpblLOzgjtOkK5MXJcTo5YT1ZHFUpaafxVyyvTprVUdeeOjhSNptwPk7jhiLJgxyTEgaDJSbObI5wP/GNDqGyQ/VuHH10xjIz29XEeMUeD5mSBgbbzC", 
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