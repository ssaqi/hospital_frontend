import React from 'react'
import {Text,Dimensions,View,StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const {width,height}=Dimensions.get("window");
function ShifPostScreen({navigation}) {
  return (
    <View style={styles.main}>
      
    <View style={styles.box}>
          <Text style={styles.text}>Where</Text>
          <Text style={styles.text1}>Sable Cottage</Text>
    </View>

    <View style={styles.box1}>
          <Text style={styles.text}>Where</Text>
          <Text style={styles.text1}>Nurse $23.00 p/h</Text>
          <Text style={styles.text1}>Syring Driver</Text>
    </View>

    <View style={styles.box2}>

          <Text style={styles.text}>When</Text>
          <Text style={styles.text1}>14 Aug 08:00 - 20:00</Text>
          <Text style={styles.text1}>14 Aug 08:00 - 20:00</Text>
          <Text style={styles.text1}>14 Aug 08:00 - 20:00</Text>
          <Text style={styles.text1}>BREAK: 60 MIN</Text>
    </View>

    <View>
       <Text style={styles.invite}>invite your favorite workers</Text>

    </View>

    <View style={styles.btn}>
        <TouchableOpacity style={styles.btn1}
        onPress={()=>navigation.navigate('hospitalhome')}
        >
            
            <Text style={styles.text3}>
            <FontAwesome5 name="redo" size={13} style={{fontWeight:"700"}}/>
              Start over</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}
        onPress={()=>navigation.navigate('post')}
        >
            <Text style={styles.text4}>Post Shift</Text>
        </TouchableOpacity>
    </View>


 </View>
  )
}
const styles = StyleSheet.create({

    main:{
    
        width: "100%",
        height: height * 11,
        backgroundColor: "#fff",
        display:"flex",
        alignItems:"center",
        paddingTop: height * 0.08
   },

   box:{

      width: width * 0.9,
      height: height * 0.1,
      borderRadius:6,
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

   box1:{

    width: width * 0.9,
    height: height * 0.2,
    borderRadius:6,
    marginTop : height * 0.01,
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

 box2:{

    width: width * 0.9,
    height: height * 0.25,
    borderRadius:6,
    marginTop : height * 0.01,
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
   text: {
    fontSize: 18,
    color: "#FF66C3",
    fontWeight: "600",
    textAlign: "left",
    paddingLeft: width * 0.2,
    marginTop: height * 0.02 
  },
  text1: {
    fontSize: 14,
    color: "#989898",
    fontWeight: "400",
    textAlign: "left",
    paddingLeft: width * 0.2,
    
  },
  btn:{

    padding: height * 0.05,
},

btn1:{

    width: width * 0.8,
    height : height * 0.04,
    backgroundColor: "#fff",
    borderRadius: 5
},

btn2:{

    width: width * 0.8,
    height : height * 0.05,
    backgroundColor: "#FF66C3",
    borderRadius: 5
},
text3:{
    fontSize: 14,
    fontWeight:"700",
    color:"#8A8A8A",
    textAlign:"center"
},
text4:{
    fontSize: 14,
    fontWeight:"700",
    color:"#fff",
    textAlign:"center",
    marginTop: height * 0.01
},
invite:{

    color:"pink",
    fontSize:17,
    fontWeight: "700",
    paddingRight: width * 0.34,
    marginTop: height * 0.01
}

})
export default ShifPostScreen
