import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo' 
import {View,Text,Dimensions,StyleSheet,TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native';
const{width,height}=Dimensions.get("window")


function Arrowback() {
  const navigation = useNavigation();
  return (
   <TouchableOpacity style={styles.main} onPress={()=>navigation.goBack()} >
     <Entypo name="chevron-left" size={23} color={"#FF66C3"}  />
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

       main:{

           paddingHorizontal:width*0.02,
           paddingVertical:height*0.03
       }
})


export default Arrowback
