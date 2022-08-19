import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { theme } from '../components/Common'
import AppoinmentComponent from '../components/Common/AppoinmentComponent';
import { getAppointments } from '../services/appointment';

const CancelledScreen = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let obj = { "apnt_status": "2", "service_type": "2", "isRecent": false, "page": 1 }
      const { response } = await getAppointments(obj)
      setLoading(false)
      setData(response)
      // console.log('...............', response)
    }
    fetchData();
  }, [])
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      {/* <Text style={{ fontFamily: theme.fontFamily.regular, fontSize: theme.fonts.font12, color: 'gray' }}>No Appoinments</Text> */}
      { loading ? <ActivityIndicator size="large" color="#00ff00" /> : <AppoinmentComponent data={data} status={"2"} /> }
    </SafeAreaView>
  )
}

export default CancelledScreen

const styles = StyleSheet.create({})