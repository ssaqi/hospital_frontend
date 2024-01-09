import React from 'react'
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
const { width, height } = Dimensions.get("window")
import IMG from '../../images/map.png'
import AntDesign from 'react-native-vector-icons/AntDesign'

function HomeScreencaregiver({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={styles.headcon}>
        <Text style={styles.txt}>welcome Back, Eunice Kusa</Text>
        <Text style={styles.txt1}>Here are your latest updates</Text>
      </View>

      <View style={styles.box}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <View style={styles.txtbg}>
            <AntDesign name="warning" size={25} color={"#FF66C3"} />
          </View>

          <View style={styles.txtbox}>
            <Text style={{ color: "#000000", fontWeight: "500" }}>
              You can only work one shift per week,
              as you hold a Tier 2 visa which
              restricts the number of hours you can
              work.
            </Text>
          </View>

        </View>

      </View>

      <View style={styles.othercontact}>
        <Text style={styles.txt2}>
          Just worked
        </Text>

        <View style={{ width: width * 0.08 }}>
          <View style={{ borderBottomWidth: 5, borderBottomColor: "#FF66C3", borderRadius: 20, bottom: height * 0.02 }}></View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "center", }}>
            <View style={styles.txtbg1}>
              <Text style={{ color: "#000" }}>
                11
              </Text>
              <Text style={{ color: "#000" }}>
                Jun
              </Text>
              <View style={{
                width: width * 0.15,
                height: height * 0.034, backgroundColor: "#FF66C3", top: height * 0.02, borderRadius: 5
              }}>
                <Text style={{ textAlign: "center", justifyContent: "center", color: "#fff" }}>
                  SUN
                </Text>
              </View>
            </View>

            <View style={styles.txtbox1}>
              <Text style={{ color: "#989898", fontWeight: "500" }}>
                Hawthrons
              </Text>
              <Text style={{ color: "#989898", fontWeight: "500" }}>
                10.0   Miles
              </Text>
              <Text style={{ color: "#989898", fontWeight: "500" }}>
                19:45 - 08:00
              </Text>
            </View>

          </View>

        </View>

        <View style={styles.map}>
          <View style={styles.mapcon}>
            <Image
              source={IMG}
              style={{ width: "100%", height: "100%", resizeMode: "cover " }}
            />
          </View>

          <View style={{ paddingHorizontal: width * 0.02 }}>
            <View style={styles.btncon}>
              <Text style={{ color: "#000", bottom: height * 0.05 }}>
                O,Nail Drive
              </Text>
              <Text style={{ color: "#000", bottom: height * 0.05 }}>
                North Blums, Peterlee,SBR 5UP
              </Text>
              <TouchableOpacity
                style={{ width: width * 0.8, height: height * 0.06, backgroundColor: "#FF66C3", justifyContent: "center", borderRadius: 20, bottom: height * 0.03 }}
                onPress={() => navigation.navigate('viewaction')}
              >
                <Text style={{ color: "#fff", fontWeight: "700", textAlign: "center", alignItems: "center" }}>
                  View Shifts Actions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingHorizontal: width * 0.02 }}>

            <View style={{ bottom: height * 0.09 }}>
              <Text style={styles.txt3}>
                Shifts invitation
              </Text>


              <View style={{ width: width * 0.08 }}>
                <View style={{ borderBottomWidth: 5, borderBottomColor: "#FF66C3", borderRadius: 20 }}></View>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: width * 0.02 }}>
            <View style={{ width: width * 0.88, height: height * 0.165, backgroundColor: "#F8F8F8", bottom: height * 0.062, alignItems: "center" }}>
              <Text style={{ color: "#000", paddingHorizontal: width * 0.04, fontWeight: "600" }}>
                Once you’ve worked some shifts, the care home will make sure you’ve the first one to know about them. Make sure your apply to some shifts below
              </Text>
              <TouchableOpacity style={{ width: width * 0.78, height: height * 0.06, borderColor: "#FF66C3", borderWidth: 1, justifyContent: "center", borderRadius: 20 }}>
                <Text style={{ color: "#FF66C3", fontWeight: "700", textAlign: "center", alignItems: "center" }}>
                  View Shifts Actions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    </View>

  )
}


const styles = StyleSheet.create({

  main: {

    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.01,

  },
  headcon: {
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.025
  },
  txt: {

    fontSize: 17,
    color: "#FF66C3",
    fontWeight: "700"
  },
  txt1: {

    fontSize: 17,
    color: "#000",
    fontWeight: "600"
  },
  box: {

    width: width * 0.9,
    paddingVertical: height * 0.015,
    marginHorizontal: width * 0.04,
    borderColor: "#FF66C3",
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  txtbg: {

    width: width * 0.15,
    height: height * 0.07,
    backgroundColor: "#EFC3F6",
    borderRadius: 50,
    right: width * 0.04,
    justifyContent: "center",
    alignItems: "center",
  },
  txtbox: {

    width: width * 0.6,
  },
  txtbox1: {

    width: width * 0.6,
    marginVertical: height * 0.01
  },
  txt2: {

    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    marginVertical: height * 0.02,
    justifyContent: "center"

  },
  txt3: {

    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    // marginVertical:height*0.02,
    justifyContent: "center"

  },
  txtbg1: {

    width: width * 0.15,
    height: height * 0.10,
    borderColor: "#FF66C3",
    borderWidth: 1,
    borderRadius: 5,
    right: width * 0.04,
    alignItems: "center"
  },
  othercontact: {

    paddingHorizontal: width * 0.04

  },
  map: {

    width: width * 0.8,
    height: height * 0.15,
    backgroundColor: "#fff",
    marginVertical: height * 0.15,

  },
  mapcon: {

    width: width * 0.9,
    height: height * 0.1,
    backgroundColor: "#fff",
    bottom: height * 0.13,
  },
  btncon: {

    paddingHorizontal: width * 0.02,
    bottom: height * 0.08
  }
})

export default HomeScreencaregiver
