import React from 'react'
import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
const { width, height } = Dimensions.get("window")
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

function Browsescreen({ navigation }) {
  return (
    <View style={styles.main}>

      <View style={{ paddingHorizontal: width * 0.06, paddingVertical: height * 0.02 }}>
        <Text style={{ color: "#FF66C3", fontWeight: '600' }}>
          BROWSE
        </Text>

        <View style={styles.headbtn}>
          <TouchableOpacity style={styles.findshift}>
            <Text style={{ color: "#fff", fontSize: 11, fontWeight: "700" }}>Find shifts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.location} onPress={() => navigation.navigate('viewlocation')} >
            <Text style={{ color: "#989898", fontSize: 11, fontWeight: "700" }}>Locations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.location} onPress={() => navigation.navigate('viewinvite')}>
            <Text style={{ color: "#989898", fontSize: 11, fontWeight: "700" }}>Invites</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.headbtnn}>
            <TouchableOpacity style={styles.shortlist}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome6 name="arrow-down-short-wide" size={15} color={"#fff"} />
                <Text style={{ color: "#fff", fontSize: 11, fontWeight: "700" }}> Sorting</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filter}>
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="filter" size={15} color={"#fff"} />
                <Text style={{ color: "#fff", fontSize: 11, fontWeight: "700" }}>Filters</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.days}>
              <Text style={{ color: "#989898", fontSize: 11, fontWeight: "700" }}>Days</Text>
            </View>
            <View style={styles.days}>
              <Text style={{ color: "#989898", fontSize: 11, fontWeight: "700" }}>Mon</Text>
            </View>

            <View style={styles.days}>
              <Text style={{ color: "#989898", fontSize: 11, fontWeight: "700" }}>Tue</Text>
            </View>
          </View>
        </ScrollView>


        <View style={styles.box}>
          <View style={{ flexDirection: "row" }}>
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

        <Text style={styles.txt2}>
          Recommended shifts
        </Text>

        <View style={{ width: width * 0.08 }}>
          <View style={{ borderBottomWidth: 5, borderBottomColor: "#FF66C3", borderRadius: 20, bottom: height * 0.02 }}></View>
        </View>


        <View style={styles.jobBox}>
          <View style={styles.jobBox1}>
            <View style={styles.hightlight}>
              <Text style={{ color: "#fff" }}>
                UNRESTRICTED
              </Text>
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
                    width: width * 0.13,
                    height: height * 0.03, backgroundColor: "#FF66C3", borderRadius: 5
                  }}>
                    <Text style={{ textAlign: "center", justifyContent: "center", color: "#fff" }}>
                      SUN
                    </Text>
                  </View>
                </View>

                <View style={styles.txtbox1}>
                  <Text style={{ color: "#989898", fontWeight: "700", fontSize: 12 }}>
                    Hawthrons
                  </Text>
                  <Text style={{ color: "#989898", fontWeight: "500", fontSize: 12 }}>
                    10.0   Miles
                  </Text>
                  <Text style={{ color: "#989898", fontWeight: "500", fontSize: 12 }}>
                    19:45 - 08:00
                  </Text>
                </View>

              </View>
            </View>
          </View>

          <View style={styles.jobBox1}>
            <View style={styles.hightlight}>
              <Text style={{ color: "#fff" }}>
                UNRESTRICTED
              </Text>
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
                    width: width * 0.13,
                    height: height * 0.03, backgroundColor: "#FF66C3", borderRadius: 5
                  }}>
                    <Text style={{ textAlign: "center", justifyContent: "center", color: "#fff" }}>
                      SUN
                    </Text>
                  </View>
                </View>

                <View style={styles.txtbox1}>
                  <Text style={{ color: "#989898", fontWeight: "700", fontSize: 12 }}>
                    Hawthrons
                  </Text>
                  <Text style={{ color: "#989898", fontWeight: "500", fontSize: 12 }}>
                    10.0   Miles
                  </Text>
                  <Text style={{ color: "#989898", fontWeight: "500", fontSize: 12 }}>
                    19:45 - 08:00
                  </Text>
                </View>

              </View>
            </View>

          </View>
        </View>


        <View style={styles.jobcard}>
          <View style={{ flexDirection: "row", justifyContent: "center", }}>
            <View style={styles.txtbg2}>
              <View style={styles.hightlight2}>
                <Text style={{ color: "#fff" }}>
                  UNRESTRICTED
                </Text>
              </View>
              <Text style={{ color: "#000" }}>
                11
              </Text>
              <Text style={{ color: "#000" }}>
                Jun
              </Text>
              <View style={{
                width: width * 0.15,
                height: height * 0.034, backgroundColor: "#FF66C3", borderRadius: 5
              }}>
                <Text style={{ textAlign: "center", justifyContent: "center", color: "#fff" }}>
                  SUN
                </Text>
              </View>
            </View>

            <View style={styles.txtbox2}>
              <Text style={{ color: "#989898", fontWeight: "500" }}>
                Dr Lorem Ipsum
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

        <View style={styles.jobcard}>
          <View style={{ flexDirection: "row", justifyContent: "center", }}>
            <View style={styles.txtbg2}>
              <View style={styles.hightlight2}>
                <Text style={{ color: "#fff" }}>
                  UNRESTRICTED
                </Text>
              </View>
              <Text style={{ color: "#000" }}>
                11
              </Text>
              <Text style={{ color: "#000" }}>
                Jun
              </Text>
              <View style={{
                width: width * 0.15,
                height: height * 0.034, backgroundColor: "#FF66C3", borderRadius: 5
              }}>
                <Text style={{ textAlign: "center", justifyContent: "center", color: "#fff" }}>
                  SUN
                </Text>
              </View>
            </View>

            <View style={styles.txtbox2}>
              <Text style={{ color: "#989898", fontWeight: "500" }}>
                Dr Lorem Ipsum
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

      </View>

    </View>
  )
}


const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headbtn: {
    width: width * 0.65,
    marginVertical: height * 0.02,
    flexDirection: "row",
    justifyContent: "space-between"

  },
  findshift: {

    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: "#FF66C3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  location: {

    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  headbtnn: {
    width: width * 1.1,
    marginVertical: height * 0.02,
    flexDirection: "row",
    justifyContent: "space-around",


  },
  shortlist: {

    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: "#FF66C3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  filter: {

    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: "#FF66C3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  days: {

    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  box: {

    width: width * 0.9,
    paddingVertical: height * 0.015,
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
    alignItems: "center"
  },
  txtbox: {

    width: width * 0.6,
  },
  txt2: {

    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    marginVertical: height * 0.02,
    justifyContent: "center"

  },
  jobBox: {

    width: width * 9,
    flexDirection: "row",
  },

  jobBox1: {

    width: width * 0.45,
    height: height * 0.12,
    borderRadius: 10,
    marginHorizontal: width * 0.005,
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
  hightlight: {
    width: width * 0.45,
    height: height * 0.024,
    backgroundColor: "#FF66C3",
    justifyContent: "center",
    alignItems: "center"
  },
  txtbg1: {

    width: width * 0.13,
    height: height * 0.075,
    borderColor: "#FF66C3",
    borderWidth: 1,
    borderRadius: 5,
    right: width * 0.04,
    top: height * 0.005,
    alignItems: "center"
  },
  txtbox1: {

    top: height * 0.009,
  },

  jobcard: {

    width: width * 0.9,
    height: height * 0.14,
    marginVertical: height * 0.03,
    borderRadius: 10,
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
  txtbg2: {

    width: width * 0.15,
    height: height * 0.1,
    borderColor: "#FF66C3",
    borderWidth: 1,
    borderRadius: 5,
    right: width * 0.15,
    top: height * 0.01,
    alignItems: "center"
  },
  txtbox2: {
    width: width * 0.4,
    top: height * 0.04,
    right: width * 0.1
  },
  hightlight2: {
    width: width * 0.45,
    height: height * 0.024,
    left: width * 0.32,
    backgroundColor: "#FF66C3",
    justifyContent: "center",
    alignItems: "center"
  },

})

export default Browsescreen
