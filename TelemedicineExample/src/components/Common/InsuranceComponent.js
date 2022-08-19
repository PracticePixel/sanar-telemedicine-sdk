import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { sandclock } from '../../assets/images'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { theme } from '../Common'

const InsuranceComponent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{
                    height: 45, width: 45, backgroundColor: "#EFF4F7", borderRadius: 8, justifyContent: "center", alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                }}>
                    <Image source={props.image} style={{ width: 30, height: 30 }} />
                </View>
                <View style={{ flexDirection: "column", paddingLeft: 10, flex:1, marginRight: 20 }}>
                    <Text style={{ fontSize: 13, fontWeight: "800",    fontFamily: theme.fontFamily.regular }}>{props.type}</Text>
                    <Text style={{ fontSize: 19, fontWeight: "900", color: "#30708C",fontFamily: theme.fontFamily.semiBold }}>{props.count}</Text>
                </View>
            </View>
        </View>
    )
}

export default InsuranceComponent

const styles = StyleSheet.create({})