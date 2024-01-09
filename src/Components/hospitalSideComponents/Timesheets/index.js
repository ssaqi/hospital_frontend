import React from 'react'
import {View,StyleSheet,Dimensions,Text, Image, TouchableOpacity} from 'react-native';
const {width,height}=Dimensions.get("window");
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
function TimeSheetscreen({navigation}) {
  return (
   <View style={styles.main}>
    <Text style={styles.heading}>
    Timesheets
    </Text>
    <View style={styles.pendingcon}>
       <View style={styles.pendingbtn}>
        <Text style={{color:"#FF66C3",fontWeight:"400"}} >
          Pending
        </Text>
        
        </View> 
        <Text style={{color:"#989898",fontWeight:"500",right:width*0.05}}>
            All
        </Text>
    </View>
     <Text style={{color:"#989898",fontWeight:"700",bottom:height*0.03,right:width*0.15}}>Shown by most recent shift, tap to All</Text>
   <View style={styles.smlcon}></View>
   
     <View style={styles.content}>
        <Text style={{color:"#989898",fontWeight:"700",paddingHorizontal:width*0.03}}>
        Ben (Benadict Aug Montgorney)
        </Text>
        <Text style={{color:"#989898",fontWeight:"700",paddingHorizontal:width*0.03,fontSize:14}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <Text style={{color:"#989898",left:width*0.64,fontWeight:"700",fontSize:12}}>
        20:00 - 08:00
        </Text>
     </View>
   
     <View style={styles.content}>
        <Text style={{color:"#989898",fontWeight:"700",paddingHorizontal:width*0.03}}>
        Ben (Benadict Aug Montgorney)
        </Text>
        <Text style={{color:"#989898",fontWeight:"700",fontSize:14,paddingHorizontal:width*0.03}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <Text style={{color:"#989898",left:width*0.64,fontWeight:"700",fontSize:12}}>
        20:00 - 08:00
        </Text>
     </View>
     <Text style={{color:"#989898",fontWeight:"700",right:width*0.25}}>
     Review TimeSheet
     </Text>
    
      <View style={styles.box}>
       <Text style={{color:"#989898",fontWeight:"700"}}>This timesheet is pending review.</Text>
      </View>

      <View style={styles.content1}>
        <Text style={{color:"#989898",fontWeight:"700"}}>
        Ben (Benadict Aug Montgorney)
        </Text>
        <Text style={{color:"#989898",fontWeight:"700",fontSize:12}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <Text style={{color:"#989898",left:width*0.64,fontWeight:"700",fontSize:12}}>
        20:00 - 08:00
        </Text>
     </View>
      <View style={styles.btncon}>
        <View style={styles.btns}>

          <TouchableOpacity style={styles.btn1}>
          <Text style={{color:"#FF66C3",fontWeight:"700"}}>
          Reject
          </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.btn2}>
          <Text style={{color:"#FF66C3",fontWeight:"700"}}>
          Approve
          </Text>

          </TouchableOpacity>
        </View>
        

        <TouchableOpacity style={styles.btnbx}>
          <Text style={{color:"#fff",fontWeight:"700"}}>
            Close
          </Text>
        </TouchableOpacity>

      </View>
      
   
      {/* <View style={styles.tabs}>
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
        
        >TimeSheet</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Feather name="users" size={20} color="#FF66C3" style={styles.tabsIcons}  />
        <Text style={styles.tabText}  onPress={()=>navigation.navigate('worked')}>Workers</Text>
    </TouchableOpacity>
</View>
      </View> */}
    </View>


   
   
  )
}

const styles = StyleSheet.create({

    main:{
    
         width: "100%",
         backgroundColor: "#fff",
         justifyContent:"center",
         alignItems:"center"
        //  paddingHorizontal:width*0.05
         
    },
    heading:{
        fontSize: 16,
        color: "#FF66C3",
        fontWeight: "500",
        marginTop : height * 0.03,
        textAlign:"center"
        
    
      },
    pendingcon:{

          width:width*0.89,
          height:height*0.05,
          backgroundColor:"#F6F6F6",
          marginVertical:height*0.05,
          flexDirection:"row",
          justifyContent:"space-between",
          paddingHorizontal:width*0.10,
          alignItems:"center"
    },
    pendingbtn:{

        width:width*0.3,
        height:height*0.038,
        borderColor:"#FF66C3",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
    },
    smlcon:{

        width:width*0.1,
        height:height*0.01,
        backgroundColor:"#FF66C3",
        borderRadius:20,
        bottom:height*0.03,
        right:width*0.39
    },
    content:{

         width:width*0.9,
         height:height*0.12,
         backgroundColor:"#F6F6F6",
         marginVertical:height*0.002,
         shadowColor: "#000",
         shadowOffset: {
           width: 0,
           height: 2,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
   
         elevation: 5,
    },
    box:{
      width:width*0.9,
      height:height*0.05,
      backgroundColor:"#fff",
      justifyContent:"center",
      paddingHorizontal:width*0.07,
      marginVertical:height*0.01,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    content1:{

      width:width*0.9,
      height:height*0.12,
      backgroundColor:"#fff",
      marginVertical:height*0.02,
      paddingHorizontal:width*0.05,
    },
    btncon:{

         paddingHorizontal:width*0.04
    },
    btns:{
         flexDirection:"row",
         justifyContent:"space-between"
    },
    btn1:{

        width:width*0.4,
        height:height*0.05,
        borderColor:"pink",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
    },
    btn2:{

      width:width*0.4,
      height:height*0.05,
      backgroundColor:"#FBF0F0",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:15,
  },
  btnbx:{

       width:width*0.86,
       height:height*0.05,
       backgroundColor:"#FF66C3",
       justifyContent:"center",
       alignItems:"center",
       marginVertical:height*0.04,
       borderRadius:15
  },
  tabs:{
    width: "100%",
    backgroundColor:"#fff",
    // paddingTop: height * 0.17,
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

export default TimeSheetscreen
