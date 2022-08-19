import { ActivityIndicator, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppoinmentComponent from '../components/Common/AppoinmentComponent'
import { getAppointments } from '../services/appointment';

const UpComingScreen = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      let obj = { "apnt_status": "0", "service_type": "2", "isRecent": false, "page": 1 }
      const { response } = await getAppointments(obj)
      setLoading(false)
      setData(response)
      console.log('UpComingScreen', response)
    }
    fetchData();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      {loading ? <ActivityIndicator size="large" color={'blue'} />
        :
        <AppoinmentComponent upcoming data={data} status={"0"} />
      }
    </SafeAreaView>
  )
}

export default UpComingScreen

