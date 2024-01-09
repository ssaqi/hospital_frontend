import React from 'react'
import {View,Text,Dimensions,StyleSheet,ImageBackground,TouchableOpacity,ScrollView, FlatList, Image} from 'react-native'
const{width,height}=Dimensions.get("window")
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const data = [
    {
      id: '1',
      name: 'Ashlea Lodege Care Home',
      role: '1.3 MILES',
      rating: 'SHIFT POSTED 8 DAYS AGO',
      // shiftsWorked: '38 shifts worked at HCPSS',
    },
    {
        id: '2',
        name: 'Ashlea Lodege Care Home',
        role: '1.3 MILES',
        rating: 'SHIFT POSTED 8 DAYS AGO',
        // shiftsWorked: '38 shifts worked at HCPSS',
      },

      {
        id: '3',
        name: 'Ashlea Lodege Care Home',
        role: '1.3 MILES',
        rating: 'SHIFT POSTED 8 DAYS AGO',
        // shiftsWorked: '38 shifts worked at HCPSS',
      },


  ];

  function Card({ item }) {
    return (
      <View style={styles.card2}>
        <View style={styles.contentcon}>
          {/* <Image
            source={IMG}
            style={styles.img}
          /> */}
          <Text style={{ color: "#FF66C3", fontWeight: "700" }}>
            {item.name}
          </Text>
          <Text style={styles.context1}>
           <Entypo name='location-pin' size={14} color={"#989898"}/>
            {item.role}
            {'\n'}
            <Entypo name='briefcase' size={12} color={"#989898"}/>
            {item.rating}
            {'\n'}
            {item.shiftsWorked}
          </Text>
        </View>

      </View>
    );
  }
function Browselocationscreen({navigation}) {
  return (
   <View style={styles.main}>
    
    <View style={{paddingHorizontal:width*0.06,paddingVertical:height*0.02}}>
    <Text style={{color:"#FF66C3",fontWeight:'600'}}>
    BROWSE
    </Text>

     <View style={styles.headbtn}>
        <TouchableOpacity style={styles.findshift} onPress={()=>navigation.navigate('browse')}>
            <Text  style={{color:"#989898",fontSize:11,fontWeight:"700"}}>Find shifts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.location} onPress={()=>navigation.navigate('viewinvite')}>
        <Text  style={{color:"#fff",fontSize:11,fontWeight:"700"}}>Locations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.invite} onPress={()=>navigation.navigate('viewinvite')}>
        <Text  style={{color:"#989898",fontSize:11,fontWeight:"700"}}>Invites</Text>
        </TouchableOpacity>
     </View>
   <ScrollView>
     <View style={styles.headbtnn}>
        {/* <TouchableOpacity style={styles.shortlist}>
          <View style={{flexDirection:"row"}}>
          <FontAwesome6 name="arrow-down-short-wide" size={15} color={"#fff"}/>
            <Text  style={{color:"#fff",fontSize:11,fontWeight:"700"}}> Sorting</Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.filter}>
          <View style={{flexDirection:"row"}}>
         <AntDesign name="filter" size={15} color={"#fff"}/>
        <Text style={{color:"#fff",fontSize:11,fontWeight:"700"}}>Filters</Text>
          </View>
        </TouchableOpacity>
  
     </View>
     </ScrollView>
    

    
   <Text style={styles.txt2}>
   There are currently 116 care location near you
    </Text>

     <View style={{width:width*0.08}}>
     <View style={{borderBottomWidth:5,borderBottomColor:"#FF66C3",borderRadius:20,bottom:height*0.02}}></View>
     </View>

     <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />

  


</View>

   </View>
  )
}


const styles = StyleSheet.create({

     main:{
         flex:1,
          backgroundColor:"#fff"
     },
     headbtn:{
        width:width*0.65,
        marginVertical:height*0.02,
        flexDirection:"row",
        justifyContent:"space-between"

     },
     findshift:{

          width:width*0.2,
          height:height*0.04,
          backgroundColor:"#F9F9F9",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:30
     },
     location:{

        width:width*0.2,
        height:height*0.04,
        backgroundColor:"#FF66C3",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30
   },
   invite:{

    width:width*0.2,
    height:height*0.04,
    backgroundColor:"#F9F9F9",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30
},
   headbtnn:{
    width:width*1.1,
    marginVertical:height*0.02,
    // flexDirection:"row",
    // justifyContent:"space-around",


 },
   shortlist:{

    width:width*0.2,
    height:height*0.04,
    backgroundColor:"#FF66C3",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5
},
filter:{

    width:width*0.2,
    height:height*0.04,
    backgroundColor:"#FF66C3",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5
},
days:{

    width:width*0.2,
    height:height*0.04,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30
}, 
box:{
        
    width:width*0.9,
    paddingVertical:height*0.015,
    borderColor:"#FF66C3",
    borderWidth:2,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
},
txtbg:{

    width:width*0.15,
    height:height*0.07,
    backgroundColor:"#EFC3F6",
    borderRadius:50,
    right:width*0.04,
    justifyContent:"center",
    alignItems:"center"
},
txtbox:{

      width:width*0.6,
},
txt2:{

    color:"#989898",
    fontWeight:"700",
    fontSize:12,
    marginVertical:height*0.02,
    justifyContent:"center"
   
},
jobBox:{
     
      width:width*9,
      flexDirection:"row",
},

jobBox1:{

      width:width*0.45,
      height:height*0.12,
      borderRadius:10,
      marginHorizontal:width*0.005,
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
hightlight:{
     width:width*0.45,
      height:height*0.024,
      backgroundColor:"#FF66C3",
      justifyContent:"center",
      alignItems:"center"
},
txtbg1:{

    width:width*0.13,
    height:height*0.075,
    borderColor:"#FF66C3",
    borderWidth:1,
    borderRadius:5,
    right:width*0.04,
    top:height*0.005,
    alignItems:"center"
},
txtbox1:{

    top:height*0.009,
},

jobcard:{

      width:width*0.9,
      height:height*0.14,
      marginVertical:height*0.02,
      borderRadius:10,
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
txtbg2:{

    width:width*0.15,
    height:height*0.1,
    borderColor:"#FF66C3",
    borderWidth:1,
    borderRadius:5,
    right:width*0.15,
    top:height*0.01,
    alignItems:"center"
},
txtbox2:{
    width:width*0.4,
    top:height*0.04,
    right:width*0.1
},
hightlight2:{
    width:width*0.45,
     height:height*0.024,
     left:width*0.32,
     backgroundColor:"#FF66C3",
     justifyContent:"center",
     alignItems:"center"
},
card2:{

  width:width*0.9,
  height:height*0.17,
  backgroundColor:"#fff",
  marginVertical:height*0.01,
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
contentcon:{

flexDirection:"row",
justifyContent:"space-between",
paddingHorizontal:width*0.05,
paddingVertical:height*0.02
},
img:{
resizeMode:"contain",
right:width*0.05,
top:2
},
context1:{

fontSize:11,
fontWeight:"600",
top:height*0.03,
color:"#989898",
width:width*0.4,
right:width*0.39,

},

    

})

export default Browselocationscreen
