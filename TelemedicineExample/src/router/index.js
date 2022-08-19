import * as React from 'react';
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LoginScreen from '../screens/LoginScreen';
import DashBoardScreen from '../screens/DashBoardScreen';
import CommonPages from '../components/Common/CommonPages';
import Test from '../Test';
import FindPage from '../screens/WelcomePages/FindPage';
import Policies from '../screens/WelcomePages/Policies';
import Receive from '../screens/WelcomePages/Receive';
import SplashScreen from "../screens/SplashScreen";
import { TopTabs } from '../components/TopTabs';
import { BottomTabs } from '../components/BottomTabs';
import UpcomingPage from '../screens/AppoinmentScreens/UpcomingPage';
import Telemedicine from '../screens/Telemedicine';
import { theme } from '../components/Common';
const Stack = createNativeStackNavigator();

const MyStack = () => {

    const headerBackImage = (navigation) => {
        return (
            <TouchableOpacity onPress={() => navigation.goBack(null)} >
                <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
        )
    }


    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    gestureEnabled: false,
                    headerBackTitle: null,
                    cardStyle: { backgroundColor: 'white' },
                    headerStyle: {backgroundColor: 'white'},
                    headerBackTitle: " ",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        fontFamily: theme.fontFamily.light,
                        fontSize: theme.fonts.font12
                    },
                    headerLeft: () => headerBackImage(navigation),
                })}
                initialRouteName="SplashScreen" >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, }} />
                <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} options={{ headerShown: false, }} />
                <Stack.Screen name="CommonPages" component={CommonPages} options={{ headerShown: false, }} />
                <Stack.Screen name="Test" component={Test} options={{ headerShown: false, }} />
                <Stack.Screen name="Telemedicine" component={Telemedicine} options={{ headerShown: false, }} />
                <Stack.Screen name="FindPage" component={FindPage} options={{ headerShown: false, }} />
                <Stack.Screen name="Policies" component={Policies} options={{ headerShown: false, }} />
                <Stack.Screen name="Receive" component={Receive} options={{ headerShown: false, }} />
                <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false, }} />
                <Stack.Screen name="TopTabs" component={TopTabs} options={{ headerShown: true }} />
                <Stack.Screen name="UpcomingPage" component={UpcomingPage} options={{ title: "Upcoming", headerTitleAlign: "center" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default MyStack;

