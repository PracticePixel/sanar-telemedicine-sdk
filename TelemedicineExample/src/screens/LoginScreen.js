import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import SwitchToggle from 'react-native-switch-toggle';
import { vw } from '../utility/viewport-units';
import { wave } from '../assets/images';
import { theme } from '../components/Common';
import Context from "../Store/Context";


const LoginScreen = ({ props }) => {
  const { loginUser } = useContext(Context);
  const navigation = useNavigation();
  const [status, setStatus] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const Login = async () => {
    loginUser(true)
    navigation.navigate("BottomTabs")
  }

  const onChangeStatus = () => {
    setStatus(!status)
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.headerText}>Hi,</Text>
          <Image source={wave} style={{ width: 37, height: 37 }} />
        </View>
        <Text style={styles.headerText}>Lets's sign you in</Text>
        <View style={{ flexDirection: "row", marginTop: 9 * vw }}>
          <Text style={{ paddingRight: 8, fontFamily: theme.fontFamily.semiBold }}>Your ID</Text>
          <View style={{ height: 20, width: 20, borderRadius: 50, borderColor: "teal", borderWidth: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "teal" }}>i</Text>
          </View>
        </View>
        <View style={styles.searchSection}>
          <AntDesign name="user" size={20} color="grey" />
          <TextInput
            style={styles.input}
            value={userName}
            placeholder="Enter Your id here"
            onChangeText={(value) => setUserName(value)}
          />
        </View>
        <Text style={{ paddingRight: 8, marginTop: 12, fontFamily: theme.fontFamily.regular }}>Your Password</Text>
        <View style={styles.searchSection}>
          <Ionicons name="lock-closed-outline" size={20} color="grey" />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="*******"
            secureTextEntry={passwordVisible}
            onChangeText={(value) => setPassword(value)}
          />
          <Entypo name={!passwordVisible ? "eye" : "eye-with-line"} size={25} color="grey" onPress={() => setPasswordVisible(!passwordVisible)} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 7 * vw }}>
          <Text style={{ fontFamily: theme.fontFamily.regular }}>Remember me</Text>
          <SwitchToggle
            backgroundColorOn={"lightblue"}
            backgroundColorOff={"#CCCCCC"}
            circleColorOff={"white"}
            circleColorOn={"#30708C"}
            switchOn={status}
            onPress={() => onChangeStatus()}
            containerStyle={styles.switchContainerStyle}
            circleStyle={styles.switcCircleStyle}
          />
          <Text style={{ color: "teal", position: "absolute", right: 8.5 * vw, fontFamily: theme.fontFamily.regular }}>Forgot Password?</Text>
        </View>
        <TouchableOpacity onPress={() => Login()} style={styles.loginBtn}>
          <Text style={{ textAlign: "center", color: "white", fontFamily: theme.fontFamily.regular, fontSize: 16 }}>Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 * vw }}>
          <Text style={{ fontSize: 18, paddingRight: 0, fontFamily: theme.fontFamily.regular }}>New User ? </Text>
          <Text style={{ color: "teal", fontSize: 18, fontFamily: theme.fontFamily.regular }}>Sign Up </Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 18 * vw,
  },
  headerText: {
    fontSize: 27,
    fontWeight: "bold",
    paddingRight: 10,
    fontFamily: theme.fontFamily.bold
  },
  switchContainerStyle: {
    width: 12 * vw,
    height: 6 * vw,
    borderRadius: 25,
    padding: 2,
    marginLeft: 10
  },
  switcCircleStyle: {
    width: 5 * vw,
    height: 5 * vw,
    borderRadius: 20
  },
  loginBtn: {
    marginRight: 30,
    marginTop: 8 * vw,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#30708C"
  },
  searchSection: {
    width: 88 * vw,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    marginTop: 5 * vw,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontFamily: theme.fontFamily.regular
  },
})
export default LoginScreen

