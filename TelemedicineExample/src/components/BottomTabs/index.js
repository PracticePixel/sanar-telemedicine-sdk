import * as React from 'react';
import { Text, View, Icon, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoardScreen from '../../screens/DashBoardScreen';
import { sandclock } from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TopTabs } from '../../components/TopTabs';
import AppointmentsList from '../../screens/AppointmentList';
import { theme } from '../Common';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Appoinment Screen!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontFamily: theme.fontFamily.medium, fontSize: theme.fonts.font16 }}>Sanar-Medgulf</Text>
            <Text style={{ fontFamily: theme.fontFamily.regular, fontSize: theme.fonts.font11, color: 'gray', marginTop: 5 }}>Telemedicine SDK</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontFamily: theme.fontFamily.medium, fontSize: theme.fonts.font16 }}>Sanar-Medgulf</Text>
            <Text style={{ fontFamily: theme.fontFamily.regular, fontSize: theme.fonts.font11, color: 'gray', marginTop: 5 }}>Telemedicine SDK</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    paddingBottom: 5,
                    height: 60,
                    marginBottom: Platform.OS == 'ios' ? 20 : 0,
                    zIndex: -99999,
                    borderWidth: 0
                },
                tabBarActiveTintColor: '#30708C',
                tabBarInactiveTintColor: 'lightblue',
                tabBarLabelStyle: { fontFamily: theme.fontFamily.regular },
            }}
        >
            <Tab.Screen name="Home" component={DashBoardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<AntDesign name="home" size={25} color={focused ? "#30708C" : "lightblue"} />)
                }} />
            <Tab.Screen name="Appoinment" component={AppointmentsList}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<Ionicons name="ios-shield-checkmark-outline" size={25} color={focused ? "#30708C" : "lightblue"} />)
                }} />
            <Tab.Screen name="Providers" component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name="percent-outline" size={25} color={focused ? "#30708C" : "lightblue"} />)
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (<AntDesign name="user" size={25} color={focused ? "#30708C" : "lightblue"} />)
                }} />
        </Tab.Navigator>
    );
}

export { BottomTabs }