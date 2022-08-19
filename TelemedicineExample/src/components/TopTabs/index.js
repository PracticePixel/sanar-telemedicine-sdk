import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CancelledScreen from '../../screens/CancelledScreen';
import UpComingScreen from '../../screens/UpComingScreen';
import CompletedScreen from '../../screens/CompletedScreen';
import { theme } from '../../components/Common'

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator
      initialRouteName={UpComingScreen}
      screenOptions={{
        tabBarLabelStyle: { textTransform: 'none', marginTop: 50, fontFamily: theme.fontFamily.regular },
        tabBarIndicatorStyle: { height: 4, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginHorizontal: 0 },
      }}
    >
      <Tab.Screen name="Upcoming" component={UpComingScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Cancelled" component={CancelledScreen} />
    </Tab.Navigator>
  );
}

export { TopTabs }
