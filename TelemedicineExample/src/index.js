import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
import MyStack from './router';
import { theme } from './components/Common';
import RootScreen from './RootScreen';
import Provider from "./Store/Provider";

const App = () => {
    const [enableView, setEnableView] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setEnableView(true)
        }, 2000);
    }, [])

    return (
        <React.Fragment>
            <Provider>
                {enableView ? <RootScreen /> :
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: theme.fontFamily.medium, fontSize: theme.fonts.font18 }}>Sanar-Medgulf</Text>
                        <Text style={{ fontFamily: theme.fontFamily.regular, fontSize: theme.fonts.font12, color: 'gray', marginTop: 5 }}>Telemedicine SDK</Text>
                    </View>
                }
            </Provider>
        </React.Fragment>
    );
}

export default App;