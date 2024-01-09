import React from 'react'
import {View,Text,Dimensions,StyleSheet,ImageBackground,TouchableOpacity,ScrollView, Image} from 'react-native'
const{width,height}=Dimensions.get("window")
import IMG from '../../images/Dp.png'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Tabbar from '../../Components/Tabbar'
function Profilescreen({navigation}) {
  return (
    <View style={styles.main}>
         <View style={styles.dpcon}>
            <View style={styles.dpimg}>
              <Image
              source={IMG}
              style={{width:"100%",height:"100%",resizeMode:"contain"}}
              />
            </View>
            <Text style={{color:"#FF66C3",fontWeight:"900",marginVertical:height*0.02}}>EUNICE KUSA MUFOYOGO</Text>
         </View>
      
        <View style={styles.optn}>
            <Text style={{color:"#989898",fontWeight:"700",fontSize:20}}>
            PROFILE SETTINGS
            </Text>
        </View>

        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('editprofile')}>

        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>
            Edit my Profile
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optn}>
            <Text style={{color:"#989898",fontWeight:"700",fontSize:20}}>
            APP SETTINGS 
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>Notifications
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optn}>
            <Text style={{color:"#989898",fontWeight:"700",fontSize:20}}>
            Informations
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>
            About Us
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
           <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>
            Refer a friend
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>
            Refer a home
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>
            Share your feedback
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>
            Live chat
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>
            Open Source Licenses
            </Text>
        </TouchableOpacity>
       

        <TouchableOpacity style={styles.optn}>
            <Text style={{color:"#989898",fontWeight:"700",fontSize:20}}>
            Legal
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>Terms and Conditions
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
        <Octicons name="dot" size={18} color={"#FF66C3"}/>
            <Text style={{color:"#837C7C",fontWeight:"700",paddingHorizontal:width*0.02}}>Privacy Policy
            </Text>
        </TouchableOpacity>

      <TouchableOpacity style={{top:height*0.01}}>    
        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('home')}>
           <Entypo name="circle-with-cross" size={25} color={"#FF66C3"}/>
            <Text style={{color:"#FF66C3",fontWeight:"700",fontSize:18}}>
                Sign out
            </Text>
        </TouchableOpacity>
      </TouchableOpacity>  
    </View>
  )
}

const styles = StyleSheet.create({

      main:{
        flex:1,
        backgroundColor:"#fff"
      },
      dpcon:{

         width:width,
         height:height*0.3,
         justifyContent:"center",
         alignItems:"center"
      },
      dpimg:{
        width:width*0.3,
        height:height*0.15,
        backgroundColor:"#fff",
        borderRadius:100
      },
      optn:{

           width:width*0.6,
           paddingHorizontal:width*0.05,
        //    backgroundColor:"red"
      },
      option:{
          width:width*0.5,
          flexDirection:"row",
          marginHorizontal:width*0.05,
          marginVertical:height*0.005
      }
})


export default Profilescreen
