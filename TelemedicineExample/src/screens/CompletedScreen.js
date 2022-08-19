import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppoinmentComponent from '../components/Common/AppoinmentComponent'
import { getAppointments } from '../services/appointment';
import { theme } from '../components/Common';

const CompletedScreen = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let obj = { "apnt_status": "1", "service_type": "2", "isRecent": false, "page": 1,  "limit": 1 }
      const { response } = await getAppointments(obj)
      setLoading(false)
      setData(response)
      console.log('...............', response)
    }
    fetchData();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                  {/* <Text style={{ fontFamily: theme.fontFamily.regular, fontSize: theme.fonts.font12, color: 'gray' }}>No Appoinments</Text> */}
      {loading ? <ActivityIndicator size="large" color="#00ff00" />
        :
        <AppoinmentComponent data={data} status={"1"} />
      }
    </SafeAreaView>
  )
}

export default CompletedScreen

const styles = StyleSheet.create({})