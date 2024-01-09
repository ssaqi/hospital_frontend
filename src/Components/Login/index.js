import React, { useEffect,useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, ImageBackground, CheckBox, Alert } from "react-native"
const { width, height } = Dimensions.get('window')
import BG from '../../images/bg.png'
import AntDesign from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto"
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
function LoginScreen({ navigation }) {
  useEffect(() => {
    GoogleSignin.configure()
  }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleRegister = () => {
    // Check if any field is empty
    if (!email || !password ) {
      setIsValid(false);
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setIsValid(true);
    navigation.navigate('Homecare') // Navigate only if registration is successful
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
        <View style={styles.form}>

          <Text style={styles.heading}>Sign in</Text>

          <View style={styles.field}>
            <View style={{ flexDirection: "row" }}>

              <Fontisto name="email" size={20} color={"#000"} />
              <TextInput style={styles.inp}
                placeholder="Email Address"
                placeholderTextColor={"grey"}
                placeholderTextSize={30}
                value={email}
                onChangeText={(text) => setEmail(text)}

              />

            </View>
            <View style={{ flexDirection: "row" }}>
              <Fontisto name="email" size={20} color={"#000"} />
              <TextInput style={styles.inp}
                placeholder="Password"
                placeholderTextColor={"grey"}
                placeholderTextSize={30}
                value={password}
                onChangeText={(text) => setPassword(text)}

              />
            </View>

          </View>
          <View style={styles.checkBoxDiv}>
            <Text style={styles.policy}>
              <Text style={{ color: "#FF66C3" }}
                onPress={() => navigation.navigate('forget')}
              >
                Forget Password
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
              <Text style={styles.text}>Sign in </Text>
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
    display: "flex",
    alignItems: "center",

  },
  form: {
    width: width * 0.9,
    height: height * 0.55,
    backgroundColor: "#fff",
    marginTop: height * 0.15,
    borderRadius: 20,

  },

  heading: {
    fontSize: 28,
    color: "#FF66C3",
    fontWeight: "500",
    textAlign: "center",
    marginTop: height * 0.03,

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


  inp: {
    width: width * 0.7,
    borderBottomWidth: 1,
    borderColor: "#000",
    marginLeft: width * 0.43,
    marginTop: 5,
    fontSize: 19,
    color: "#36454F",
    fontWeight: "400"

  },
  field: {
    width: "50%",
    alignItems: "center",
    marginTop: height * 0.05,
  },

  btnDiv: {
    width: width * 0.9,
    height: height * 0.4,
    display: "flex",
    alignItems: "center",
    marginTop: height * 0.02
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
  checkBoxDiv: {
    alignItems: "center",
    marginTop: height * 0.004,
  },
  policy: {
    fontSize: 17,
    marginTop: 3,
    marginTop: height * 0.01,
    left: 70
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
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
    textAlign: "center",
    marginTop: height * 0.011,
  },
  text2: {
    fontSize: 16,
    color: "#FF66C3",
    fontWeight: "400",
    textAlign: "center",
    marginTop: height * 0.011,
  }
})


export default LoginScreen
