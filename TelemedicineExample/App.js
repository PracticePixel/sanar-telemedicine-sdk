import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import SanarRTC, { SanarTelemedicine, BookingFlow } from 'react-native-sanar-telemedicine-rc';

const App = () => {
   
   const [connect, setConnect] = useState(false);
   const [bookingFlowStatus, setBookingFlowStatus] = useState(false);

   useEffect(() => {
      //  SanarTelemedicine.Connect("your_client_id", {uid: "SMU6", did: "abcdefg"})
      //  .then(response => {
      //      setConnect(response);
      //  }).catch(e => console.log(e));
   });

   return (
       <>
           <View style={styles.page}>
               <View style={styles.container}>
               <Text>App content</Text>
               </View>
           </View>
        
        {/* Bookingflow Component */}
        {/* <BookingFlow
           enable={bookingFlowStatus}
           onEndFlow={()=>setBookingFlowStatus(false)} /> */}

        {/* Sanar RTC Component */}
        {/* <SanarRTC enable={connect} /> */}
       </>
   );
};

const styles = StyleSheet.create({
 page: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF'
 },
 container: {
   height: 300,
   width: 300,
   backgroundColor: 'tomato'
 },
 map: {
   flex: 1
 }
});

export default App;
