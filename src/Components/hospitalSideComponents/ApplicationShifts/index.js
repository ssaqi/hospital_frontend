import React from 'react'
import {View,StyleSheet,Dimensions,Text, Image, TouchableOpacity} from 'react-native';
const {width,height}=Dimensions.get("window");
import IMG from '../../../images/image.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
function Applicationshifts({navigation}) {
  return (
    <View style={styles.main}>
    <Text style={styles.heading}>
    Applicants for this shifts
    </Text>
   
   <View style={styles.card}>
        <View style={styles.dateCon}>
            <Text style={styles.datetxt}>Wed 13 Aug 23</Text>
            <Text style={styles.datetxt}>20:00 - 08:00</Text>
        </View>
      <View style={styles.contentcon}>
        <Image
         source={IMG}
         style={styles.img}
        />
        <Text style={styles.context}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </Text>
    
      </View>
      <View style={styles.status}>
            <Text style={styles.txt}>Cancel Applicants</Text>
            <Text style={styles.txt1}>$26.60/hr</Text>
        </View>
        <Text style={styles.Rtxt}>Review Applications</Text>
   </View>

   <View style={styles.card2}>
      <View style={styles.contentcon}>
        <Image
         source={IMG}
         style={styles.img}
        />
        
        <Text style={styles.context1}>
        Juiletto Antwi 
        Senior Carer
4.7 Ratiing
38 shifts worked at HCPSS
        </Text>
    
      </View>
      <View style={styles.btncon}>
            <TouchableOpacity style={styles.btn1}>
                <Text style={{color:"#FF66C3",fontWeight:"600"}} >Dismiss</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
                <Text style={{color:"#fff",fontWeight:"600"}}>Approved</Text>
            </TouchableOpacity>
           
        </View>
      
   </View>
   <View style={styles.card3}>
      <View style={styles.contentcon}>
        <Image
         source={IMG}
         style={styles.img}
        />
        
        <Text style={styles.context1}>
        Juiletto Antwi 
        Senior Carer
4.7 Ratiing
38 shifts worked at HCPSS
        </Text>
    
      </View>
      <View style={styles.btncon}>
            <TouchableOpacity style={styles.btn1}>
                <Text style={{color:"#FF66C3",fontWeight:"600"}} >Dismiss</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
                <Text style={{color:"#fff",fontWeight:"600"}}>Approved</Text>
            </TouchableOpacity>
           
        </View>
      
   </View>
   
   <View style={styles.tabs}>
    <View style={styles.tabsIcons}>
    <TouchableOpacity>
    <AntDesign name="home" size={20} color="#FF66C3" style={styles.tabsIcons} />
        <Text style={styles.tabText} onPress={()=>navigation.navigate("hospitalhome")}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="shopping-bag" size={20} color="#FF66C3" style={styles.tabsIcons} />
        <View style={styles.tabText}>
        <Text style={styles.tabText}   onPress={()=>navigation.navigate('usershifts')} >
        Shift
       </Text>
        
        </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <Feather name="folder" size={20} color="#FF66C3" style={styles.tabsIcons1} />
        <Text style={styles.tabText}
        onPress={()=>navigation.navigate('timesheet')}
        >TimeSheet</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Feather name="users" size={20} color="#FF66C3" style={styles.tabsIcons}  />
        <Text style={styles.tabText}
        onPress={()=>navigation.navigate('worked')}
        >Workers</Text>
    </TouchableOpacity>
</View>
</View>

</View>
  )
}


const styles = StyleSheet.create({

    main:{
    
         width: "100%",
         height: height * 11,
         backgroundColor: "#fff",
         display: "flex",
         alignItems:"center",
    },
    heading:{
        fontSize: 16,
        color: "#FF66C3",
        fontWeight: "500",
        marginTop : height * 0.02
    
      },
    card:{

         width:width*0.9,
         height:height*0.17,
         backgroundColor:"#fff",
         marginVertical:height*0.03,
         borderRadius:8,
         shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5
    },
    dateCon:{

        width:width*0.9,
        height:height*0.03,
        backgroundColor:"#FF66C3",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:width*0.07
    },
    datetxt:{

         color:"#fff",
         fontWeight:"600"
    },
    contentcon:{

          flexDirection:"row",
          justifyContent:"space-between",
          paddingHorizontal:width*0.09,
          paddingVertical:height*0.02
    },
    img:{
        resizeMode:"contain",
        right:width*0.05,
        top:2
    },
    context:{

         fontSize:11.5,
         fontWeight:"500",
         top:height*0.01,
         color:"#989898"
    },
    status:{

         width:width*0.45,
         height:height*0.03,
         backgroundColor:"#EDEDED",
         paddingHorizontal:width*0.06,
         left:width*0.19,
         bottom:height*0.023,
         flexDirection:"row",
         justifyContent:"space-between",
         alignItems:"center"
    },
    txt:{
        color:"#FF66C3",
        fontWeight:"600",
       
    },
    txt1:{
        color:"#989898",
        fontWeight:"600",
        left:width*0.12
    },
    Rtxt:{
        color:"#FF66C3",
        fontWeight:"600",
        marginVertical:height*0.04
    },
    card2:{

        width:width*0.9,
        height:height*0.17,
        backgroundColor:"#fff",
        marginVertical:height*0.07,
        borderRadius:8,
        shadowColor: "#000000",
       shadowOffset: {
       width: 0,
       height: 3,
       },
       shadowOpacity:  0.18,
       shadowRadius: 4.59,
       elevation: 5
   },
   btncon:{

        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:width*0.05
   },
   btn1:{
       width:width*0.4,
       height:height*0.04,
       borderColor:"#FF66C3",
       borderWidth:1,
       borderRadius:10,
       alignItems:"center",
       justifyContent:"center"
   },

   btn2:{
    width:width*0.4,
    height:height*0.04,
    backgroundColor:"#FF66C3",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    left:8
},
context1:{

    fontSize:13,
    fontWeight:"600",
    top:height*0.01,
    color:"#989898",
    width:width*0.4,
    right:width*0.2
},
card3:{

    width:width*0.9,
    height:height*0.17,
    backgroundColor:"#fff",
    bottom:height*0.02,
    borderRadius:8,
    shadowColor: "#000000",
   shadowOffset: {
   width: 0,
   height: 3,
   },
   shadowOpacity:  0.18,
   shadowRadius: 4.59,
   elevation: 5
},
tabs:{
    width: "100%",
    backgroundColor:"#fff",
    paddingTop: height * 0.17,
    justifyContent:"center",
    alignItems:"center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 

},
tabsIcons:{
    
    width:"85%",
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:width*0.027,
    fontWeight:"bold",
    fontSize:27,
    color:"#FF66C3"  
},
tabsIcons1:{

   width:"85%",
   flexDirection:"row",
   justifyContent:"space-between",
   marginLeft:width*0.06,
   fontWeight:"bold",
   fontSize:27,
   color:"#FF66C3" 
},
tabText:{
    fontSize:16,
    color: "#000",
    fontWeight: "500",
    left:width*0.007,

}
  

})  

export default Applicationshifts
