import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const { width, height } = Dimensions.get("window")

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'


import SignupScreen from '../Components/SignupScreen';
import Signup2Screen from '../Components/SignupScreen/Signup2Screen';
import SendcodeScreen from '../Components/SendcodeScreen';
import Conformpassword from '../Components/ConformPassword';
import LoginScreen from '../Components/Login';
import Homeloginscreen from '../Components/Homeloginscreen';
import ForgetScreen from '../Components/ForgetScreen';


import PostshiftScreen from '../Components/hospitalSideComponents';
import TimeSheetscreen from '../Components/hospitalSideComponents/Timesheets';
import Applicationshifts from '../Components/hospitalSideComponents/ApplicationShifts';
import Workerscreen from '../Components/hospitalSideComponents/Workerscreen'
import ShifPostScreen from '../Components/hospitalSideComponents/ShiftPostScreen';
import JobfromScreen from '../Components/hospitalSideComponents/Postjobfromscreen';

import HomeScreencaregiver from '../Screens/HomeScreen';
import Browsescreen from '../Screens/BrowseScreen';
import Profilescreen from '../Screens/Profilescreen';
import Timesheetscreen from '../Screens/Timesheetscreen';
import Myshiftscreen from '../Screens/Myshiftscreen';
import Shiftsaction from '../Screens/Viewshifthomescreen';
import Browselocationscreen from '../Screens/Locationscreen';
import Browseinvitescreen from '../Screens/Browseinviescreen';
import Editprofilescreen from '../Screens/Editprofilescreen';
import PersonalDetailscreen from '../Screens/Prosenaldetailscreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={SignupScreen} />
      <Stack.Screen name="registeration" component={Signup2Screen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="homelogin" component={Homeloginscreen} />

      <Stack.Screen name="sendcode" component={SendcodeScreen} />
      <Stack.Screen name="forget" component={ForgetScreen} />
      <Stack.Screen name="confrmpass" component={Conformpassword} />
      <Stack.Screen name="form" component={JobfromScreen} />
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen name="Homecare" component={BottomTab2} />



      <Stack.Screen name="viewaction" component={Shiftsaction} />
      <Stack.Screen name="viewlocation" component={Browselocationscreen} />
      <Stack.Screen name="viewinvite" component={Browseinvitescreen} />
      <Stack.Screen name="editprofile" component={Editprofilescreen} />
      <Stack.Screen name="detailscreen" component={PersonalDetailscreen} />
      
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;

function BottomTab() {
  return (
    <Tab.Navigator

      screenOptions={{
        headerShown: false,

      }}
      tabBarOptions={{

        activeTintColor: '#FF66C3',
        inactiveTintColor: '#000',
        showIcon: true,

       tabBarStyle: {
          position: "absolute",
          flexDirection: "column",
          bottom: 20,
          width: width * 0.95,
          height: height * 0.10,
          borderRadius: 100,
          justifyContent: "center", alignItems: "center",
          paddingHorizontal: width * 0.07,
          paddingBottom: height * 0.03,
          paddingTop: height * 0.01,
          backgroundColor: 'red',
          left: width * 0.025,
          borderColor: "#0DFFE8",
          borderWidth: 2,

        },


      }}


    >



      <Tab.Screen
        name="Home"
        component={PostshiftScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),





        }} />

      <Tab.Screen
        name="Shifts"
        component={ShifPostScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="calendar-check" size={size} color={color} />
          ),



        }} />

      <Tab.Screen name="Time sheets"
        component={TimeSheetscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="folderopen" size={size} color={color} />
          ),



        }} />

      <Tab.Screen name="Worker"
        component={Workerscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),



        }} />


      {/* <Tab.Screen name="Application"
        component={Applicationshifts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="graduation-cap" size={size} color={color} />
          ),



        }} /> */}
      

    </Tab.Navigator>
  );
}



function BottomTab2() {
  return (
    <Tab.Navigator

      screenOptions={{
        headerShown: false,

      }}
      tabBarOptions={{

        activeTintColor: '#FF66C3',
        inactiveTintColor: '#000',
        showIcon: true,

      //  tabBarStyle: {
      //     position: "absolute",
      //     flexDirection: "column",
      //     bottom: 20,
      //     width: width * 0.95,
      //     height: height * 0.10,
      //     borderRadius: 100,
      //     justifyContent: "center", alignItems: "center",
      //     paddingHorizontal: width * 0.07,
      //     paddingBottom: height * 0.03,
      //     paddingTop: height * 0.01,
      //     backgroundColor: 'red',
      //     left: width * 0.025,
      //     borderColor: "#0DFFE8",
      //     borderWidth: 2,

      //   },


      }}


    >



      <Tab.Screen
        name="Home"
        component={HomeScreencaregiver}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),

        }} />

<Tab.Screen name="browse"
        component={Browsescreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),



        }} />

      <Tab.Screen
        name="Shifts"
        component={Myshiftscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="calendar-check" size={size} color={color} />
          ),



        }} />

      <Tab.Screen name="Time sheets"
        component={Timesheetscreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="folderopen" size={size} color={color} />
          ),



        }} />

    

      <Tab.Screen name="Profile"
        component={Profilescreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),



        }} />
      

    </Tab.Navigator>
  );
}