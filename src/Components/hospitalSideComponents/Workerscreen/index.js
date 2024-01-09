import React from 'react'
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, FlatList } from 'react-native';
const {width,height}=Dimensions.get("window");
import IMG from '../../../images/image.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
const data = [
    {
      id: '1',
      name: 'Juiletto Antwi',
      role: 'Senior Carer',
      rating: '4.7 Rating',
      shiftsWorked: '38 shifts worked at HCPSS',
    },
    {
        id: '2',
        name: 'Juiletto Antwi',
        role: 'Senior Carer',
        rating: '4.7 Rating',
        shiftsWorked: '38 shifts worked at HCPSS',
      },

      {
        id: '3',
        name: 'Juiletto Antwi',
        role: 'Senior Carer',
        rating: '4.7 Rating',
        shiftsWorked: '38 shifts worked at HCPSS',
      },

      {
        id: '4',
        name: 'Juiletto Antwi',
        role: 'Senior Carer',
        rating: '4.7 Rating',
        shiftsWorked: '38 shifts worked at HCPSS',
      },
  ];

  function Card({ item }) {
    return (
      <View style={styles.card2}>
        <View style={styles.contentcon}>
          <Image
            source={IMG}
            style={styles.img}
          />
          <Text style={{ color: "#FF66C3", fontWeight: "700" }}>
            {item.name}
          </Text>
          <Text style={styles.context1}>
            {item.role}
            {'\n'}
            {item.rating}
            {'\n'}
            {item.shiftsWorked}
          </Text>
        </View>
        <View style={styles.txtcon}>
          <Text style={{ color: "#989898", fontWeight: "700" }}>20:00</Text>
          <Text style={{ color: "#989898", fontWeight: "700" }}> - 08:00</Text>
        </View>
      </View>
    );
  }

function index({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>
      Workers
      </Text>

      <Text style={styles.heading1}>
        Expected at your home(s) today
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />

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
         onPress={()=>navigation.navigate('timesheet')}
        >TimeSheet</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Feather name="users" size={10} color="#FF66C3" style={styles.tabsIcons}  />
        <Text style={styles.tabText}  onPress={()=>navigation.navigate('worked')}>Workers</Text>
    </TouchableOpacity>
</View>
      </View> */}


    </View>



  )
}


const styles = StyleSheet.create({

    main:{
        width:"100",
        height: height * 1,
        backgroundColor: "#fff",
         justifyContent:"center",
         alignItems:"center"
        //  paddingHorizontal:width*0.03
         
    },
    heading:{
        fontSize: 16,
        color: "#FF66C3",
        fontWeight: "500",
        marginTop : height * 0.03,
        textAlign:"center",
        
    
      },
      heading1:{
        fontSize: 13,
        color: "#FF66C3",
        fontWeight: "500",
        marginTop : height * 0.03,
        right:width*0.14
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
    paddingHorizontal:width*0.09,
    paddingVertical:height*0.02
},
img:{
  resizeMode:"contain",
  right:width*0.05,
  top:2
},
context1:{

    fontSize:13,
    fontWeight:"600",
    top:height*0.025,
    color:"#989898",
    width:width*0.4,
    right:width*0.25
},
btncon:{

    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:width*0.05
},
txtcon:{

       flexDirection:"row",
       paddingHorizontal:width*0.24
},
tabs:{
    width: "100%",
    backgroundColor:"#fff",
    marginTop:height*0.05,
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
export default index
