import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, CheckBox, ImageBackground, Alert } from "react-native"
const { width, height } = Dimensions.get('window')
import BG from '../../images/bg.png'
import AntDesign from "react-native-vector-icons/AntDesign"
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
function SignupScreen({ navigation }) {
  useEffect(() => {
    GoogleSignin.configure()
  }, [])

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(true);



  const handleRegister = () => {
    // Check if any field is empty
    if (!username || !email || !password || !confirmPassword) {
      setIsValid(false);
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setIsValid(true);
    navigation.navigate('login'); // Navigate only if registration is successful
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <ImageBackground source={BG}>
      <View style={styles.main}>
        <Text style={styles.heading} >Care Giver / Recruiting Agencies</Text>
        <View style={styles.form}  >
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btn1}
              onPress={() => navigation.navigate('home')}
            >
              <Text style={styles.text1}>Care Giver / RA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}
              onPress={() => navigation.navigate('registeration')}
            >
              <Text style={styles.text2}>Care Home </Text>
            </TouchableOpacity>
          </View>

          <View >
            <TextInput
              placeholder="Username"
              placeholderTextColor={"grey"}
              placeholderTextSize={30}
              style={styles.inp}
              value={username}
              onChangeText={(text) => setUsername(text)}

            >
            </TextInput>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={"grey"}
              placeholderTextSize={30}
              style={styles.inp}
              value={email}
              onChangeText={(text) => setEmail(text)}

            >
            </TextInput>

            <TextInput
              placeholder="Password"
              placeholderTextColor={"grey"}
              placeholderTextSize={30}
              style={styles.inp}
              value={password}
              onChangeText={(text) => setPassword(text)}

            >
            </TextInput>

            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={"grey"}
              placeholderTextSize={30}
              style={styles.inp}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}

            >
            </TextInput>

          </View>
          <View style={styles.checkBoxDiv} >
            <Text
              style={{ color: "#000" }}
            >
              Already Register ?
              <Text style={{ color: "#FF66C3", fontWeight: 500 }}
                onPress={() => navigation.navigate('login')}
              >
                login
              </Text>
            </Text>
          </View>
          <View style={styles.btnDiv}>
            <TouchableOpacity
              style={styles.bttn}
              onPress={signIn}
            >
              <AntDesign name="google" size={20} color={"#fff"} style={styles.icon} />
              <Text style={styles.text}>Google </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleRegister(); 
                
              }}
              style={styles.bttn}
            >
              <AntDesign name="login" size={20} color={"#fff"} style={styles.icon} />
              <Text style={styles.text} >Register</Text>
            </TouchableOpacity>
          </View>


        </View>

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({


  main: {
    width: "100%",
    height: height * 1.1,
    // backgroundColor: "pink",
    display: "flex",
    alignItems: "center",


  },
  heading: {
    fontSize: 20,
    color: "#818181",
    fontWeight: "500",
    textAlign: "center",
    marginTop: height * 0.10,

  },


  form: {
    width: width * 0.9,
    height: height * 0.62,
    backgroundColor: "#fff",
    marginTop: height * 0.06,
    borderRadius: 20,
  },
  btn: {
    width: width * 0.8,
    height: height * 0.06,
    borderRadius: 50,
    left: 20,
    marginTop: height * 0.03,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  btn1: {
    width: width * 0.36,
    height: height * 0.052,
    backgroundColor: "#FF66C3",
    left: 5,
    borderRadius: 20,
    marginTop: 2
  },
  btn2: {
    width: width * 0.36,
    height: height * 0.052,
    backgroundColor: "#FFD7EF",
    left: 23,
    borderRadius: 20,
    marginTop: 2
  },
  text1: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "400",
    textAlign: "center",
    marginTop: height * 0.010,
  },
  text2: {
    fontSize: 14,
    color: "#FF66C3",
    fontWeight: "400",
    textAlign: "center",
    marginTop: height * 0.010,
  },
  inp: {
    width: width * 0.7,
    borderBottomWidth: 1,
    borderColor: "#000",
    marginLeft: width * 0.08,
    marginTop: 5,
    fontSize: 19,
    color: "#36454F",
    fontWeight: "400"

  },
  checkBoxDiv: {
    alignItems: "center",
    marginTop: height * 0.012,
  },
  btnDiv: {
    width: width * 0.9,
    height: height * 0.4,
    display: "flex",
    alignItems: "center"
  },
  bttn: {
    width: '50%',
    height: 40,
    backgroundColor: "#FF66C3",
    borderRadius: 5,
    marginTop: height * 0.01,
    flexDirection: "row",
    justifyContent: "center",



  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    marginVertical: height * 0.005,

  },

  icon: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    marginVertical: height * 0.012,
    right: width * 0.03
  },



})

export default SignupScreen
