import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, FlatList, Image, TextInput } from 'react-native'
import Arrowback from '../../Components/Arrowback'
const { width, height } = Dimensions.get("window")
import IMG from '../../images/Dp.png'
function PersonalDetailscreen({navigation}) {
  return (
     <View style={styles.main}>
              <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Arrowback navigation={navigation} />


                <View style={{ paddingHorizontal: width * 0.26, paddingVertical: height * 0.02 }}>
                    <Text style={{ color: "#8A8A8A", fontWeight: '600', alignSelf: "center" }}>
                    Personal details
                    </Text>
                </View>

            </View>

            <View style={styles.dpcon}>
            <View style={styles.dpimg}>
              <Image
              source={IMG}
              style={{width:"100%",height:"100%",resizeMode:"contain"}}
              />
            </View>
            <Text style={{color:"#FF66C3",fontWeight:"600",marginVertical:height*0.003}}>EUNICE KUSA MUFOYOGO</Text>
         </View>
      
            <View style={styles.inp}>
               <Text style={styles.text}>Preferred name (optional)</Text>
               <TextInput
                  placeholder='First name'
                  placeholderTextColor={"#989898"}
                  style={styles.input}
               >
               </TextInput>
            </View>

            <View style={styles.inp}>
               <Text style={styles.text}>About me</Text>
               <TextInput
                  placeholder='About me'
                  placeholderTextColor={"#989898"}
                  style={styles.input}
               >
               </TextInput>
            </View>

            <View style={styles.ficcon}>
               <Text style={styles.text}> Financial information</Text>
               <View>
                <Text>Sort: 11-07-56 Acc: *****362</Text>
               </View>
            </View>

            <View style={styles.inp}>
               <Text style={styles.text}>Last name</Text>
               <TextInput
                  placeholder='Last name'
                  placeholderTextColor={"#989898"}
                  style={styles.input}
               >
               </TextInput>
            </View>

            <View style={styles.inp}>
               <Text style={styles.text}>Preferred name (optional)</Text>
               <TextInput
                  placeholder='Preferred name '
                  placeholderTextColor={"#989898"}
                  style={styles.input}
               >
               </TextInput>
            </View>


            <View style={styles.inp}>
               <Text style={styles.text}>Date of Birth</Text>
               <TextInput
                  placeholder='Date of Birth'
                  placeholderTextColor={"#989898"}
                  style={styles.input}
               >
               </TextInput>
            </View>


            <View style={styles.inp}>
               <Text style={styles.text}>Nmc Code</Text>
               <TextInput
                  placeholder='20101470'
                  placeholderTextColor={"#989898"}
                  style={styles.input}
               >
               </TextInput>
            </View>




            <View style={styles.btn}>
               <TouchableOpacity style={styles.btn2}
                onPress={()=>navigation.navigate('editprofile')}
               >
                  <Text style={styles.text2}>Save changes</Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
     </View>
  )
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    contentcon: {


        marginVertical: height * 0.03
    },
    context: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: width * 0.02
    },
    inp: {
        margin: width * 0.01
     },
     inp1: {
        margin: width * 0.02
     },
     input: {
   
        borderWidth:3,
        borderColor: "#F6F6F6",
        borderRadius: 5,
        color: "#000"
     },
     text: {
        fontSize: 15,
        fontWeight: "500",
        color: "#989898"
  
     },
     text2: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FF66C3",
        textAlign: "center",
        marginTop: height * 0.01
     },
     btn2: {
  
        width: width * 0.9,
        height: height * 0.052,
        borderColor: "#FF66C3",
        borderWidth:2,
        borderRadius: 15
     },
     btn: {
  
        padding: height * 0.03,
        alignItems: "center"
     },
     ficcon:{

          height:height*0.1,
          borderColor:"#989898",
          borderWidth:1,
          backgroundColor:"#fff",
          borderRadius:5,
          paddingHorizontal:width*0.04,
        //   marginVertical:height*0.05
          
     },
     dpcon:{

        width:width,
        height:height*0.12,
        justifyContent:"center",
        alignItems:"center"
     },
     dpimg:{
       width:width*0.3,
       height:height*0.1,
       backgroundColor:"#fff",
       borderRadius:100
     },
})

export default PersonalDetailscreen
