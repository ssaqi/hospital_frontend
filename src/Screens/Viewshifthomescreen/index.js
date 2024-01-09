import React from 'react'
import {View,Text,Dimensions,StyleSheet,ImageBackground,TouchableOpacity,ScrollView} from 'react-native'
import Arrowback from '../../Components/Arrowback'
const{width,height}=Dimensions.get("window")
import BG from '../../images/mood.png'
import IMG from '../../images/map.png'
function Shiftsaction() {
  return (
   <View style={styles.main} >
     <View style={styles.imgcon}>
    <ImageBackground
     source={BG}
     style={{width:"100%",height:"100%"}}
    >
    <Arrowback/>
  
      <View style={styles.items}>
        <View>
        <Text style={{color:"#fff",fontWeight:"700"}}>
        13 August
        </Text>
        </View>

        <View>
        <Text style={{color:"#fff",fontWeight:"700"}}>
        13 August
        </Text>
        </View>        
      </View>

      <View style={styles.items1}>
        <View>
        <Text style={{color:"#fff",fontWeight:"700"}}>
        Night Shift
        </Text>
        </View>

        <View>
        <Text style={{color:"#fff",fontWeight:"700"}}>
        $25.64/H
        </Text>
        </View>        
      </View>

      <View style={styles.items1}>
        <View  style={{width:width*0.15,height:height*0.03,backgroundColor:"#FF66C3",marginVertical:height*0.005,borderRadius:5}}>
        <Text style={{color:"#fff",textAlign:"center",fontWeight:"700"}}>
        PAYE
        </Text>
        </View>

        <View>
        <Text style={{color:"#fff",fontWeight:"700"}}>
        incl. $2.76 holidays Pay
        </Text>
        </View>        
      </View>
      
   <View style={styles.box}>
   
   <View style={styles.boxcont}>
     <View style={styles.head}>
        <Text style={{color:"#8A8A8A",fontWeight:"bold"}}>Hawthrons</Text>

        <View style={{width:width*0.2,height:height*0.03,backgroundColor:"#D9D9D9",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"#8A8A8A",fontSize:12,fontWeight:"bold"}}> 10.0 miles</Text>
        </View>
     </View>
   <Text style={{color:"#989898",fontWeight:"bold",paddingHorizontal:width*0.03,paddingVertical:height*0.005}} >Check in now</Text>
  
   <View style={{width:width*0.15,height:height*0.06,paddingHorizontal:width*0.03}}>
    <View style={{borderBottomWidth:5,borderBottomColor:"#FF66C3",borderRadius:10}}></View>
   </View>
    
    <Text style={{color:"#989898",fontWeight:"bold",paddingHorizontal:width*0.03,bottom:height*0.04}}>
    Your shift is about to start,Check in now 
and automactically submit your timesheet.
    </Text>

   <View style={styles.btncon}>
     <TouchableOpacity style={styles.btn}>
        <Text style={{color:"#989898",fontWeight:"700",}}>check in</Text>
     </TouchableOpacity>
     {/* LINE */}
     <View style={{width:width*0.8,paddingHorizontal:width*0.03}}>
    <View style={{borderBottomWidth:1,borderBottomColor:"#CBCACA", marginVertical:height*0.005,}}></View>
   </View>
     <TouchableOpacity style={styles.btn1}>
        <Text style={{color:"#989898",fontWeight:"700",}}>I’m going to be late </Text>
     </TouchableOpacity>
   </View>

   </View>
  
</View>
      </ImageBackground>
</View>
  <View style={{paddingHorizontal:width*0.05}}>

      <View style={styles.allcont}>
        <ScrollView >
            <Text style={{color:"#000",fontWeight:"600"}}>
            All Content here 
            </Text>
            
        </ScrollView>
     </View>


</View>

{/* <View style={{width:width*0.5,height:height*0.5,backgroundColor:'#000'}}>

</View> */}

<View>


</View>



</View>
    
 
  )
}


const styles = StyleSheet.create({

    main:{

          flex:1,
          backgroundColor:"#fff",
    },
    imgcon:{

          height:height*0.3,
          backgroundColor:"blue"
    },
    items:{
        
        paddingHorizontal:width*0.07,
         marginVertical:height*0.02,
        flexDirection:"row",
       justifyContent:"space-between"
   },
    items1:{
        
         paddingHorizontal:width*0.07,
         flexDirection:"row",
        justifyContent:"space-between"
    },
    box:{

        //   backgroundColor:"red",
          alignItems:"center",
          justifyContent:"center",
        
    },
    boxcont:{


        width:width*0.9,
        height:height*0.35,
        marginVertical:height*0.03,
        borderRadius:15,
        backgroundColor:"#fff",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    head:{
        width:width*0.9,
        height:height*0.07,
        backgroundColor:"#F6F6F6",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:width*0.04,
        alignItems:"center",


    },
    btncon:{

          paddingHorizontal:width*0.04,
          bottom:height*0.03
    },
    btn:{

          width:width*0.8,
          height:height*0.06,
          backgroundColor:"#F6F6F6",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:30
    },
    btn1:{

        width:width*0.8,
        height:height*0.06,
        marginVertical:height*0.001,
        backgroundColor:"#FFDDDD",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30
  },
  allcont:{
    width:width*0.9,
    height:height*0.1,
    marginVertical:height*0.3,
    backgroundColor:"#CCCCCC",
    paddingHorizontal:width*0.04,
   paddingVertical:height*0.02
  },
  map:{

      width:width*9,
      height:height*0.06
  }
  
      
})

export default Shiftsaction
