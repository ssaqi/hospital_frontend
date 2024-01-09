import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const { width, height } = Dimensions.get("window");

function Myshiftscreen() {
  const [activeScreen, setActiveScreen] = useState('bookedShifts');

  const renderContent = () => {
    switch (activeScreen) {
      case 'bookedShifts':
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.main}>
           
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

      <Text style={styles.txt2}>
        Recommended shifts
      </Text>
      <View style={{ padding: 3.5 }}>
        <View style={{ flexDirection: "row", justifyContent: "center", }}>

          <Text style={{ color: "#989898" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry .Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Text>

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
          </ScrollView>
        );
      case 'application':
        return (
          <ScrollView>
             <View style={styles.main}>
  
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
          </ScrollView>
        );
      default:
        return null;
    }
  };

  const getButtonStyles = (screen) => {
    return {
        backgroundColor: activeScreen === screen ? "#FF66C3" : "#F9F9F9",
        color: activeScreen === screen ? "#fff" : "#989898",
    };
};

  return (
    <View style={styles.main}>
      <View style={{ paddingHorizontal: width * 0.01, paddingVertical: height * 0.02 }}>
        <Text style={{ color: "#FF66C3", fontWeight: '600' }}>
          MY SHIFTS
        </Text>
      </View>

      <View style={styles.headbtn}>
        <TouchableOpacity
          style={[styles.findshift, getButtonStyles('bookedShifts')]}
          onPress={() => setActiveScreen('bookedShifts')}
        >
          <Text style={{ color: "#fff", fontSize: 11, fontWeight: "700" ,...getButtonStyles('bookedShifts') }}>
            Booked shifts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.location, getButtonStyles('application') ]}
          onPress={() => setActiveScreen('application')}
        >
          <Text style={{ color: "#989898", fontSize: 11, fontWeight: "700" ,...getButtonStyles('application')  }}>
            Application
          </Text>
        </TouchableOpacity>
      </View>

      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.02
  },
  headbtn: {
    width: width * 0.65,
    marginVertical: height * 0.01,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  findshift: {
    width: width * 0.3,
    height: height * 0.04,
    backgroundColor: "#FF66C3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  location: {
    width: width * 0.32,
    height: height * 0.04,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  },
  jobcard: {

    width: width * 0.9,
    height: height * 0.14,
    marginVertical: height * 0.01,
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
  txt2: {

    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    padding: 6,
    justifyContent: "center"

  },

});

export default Myshiftscreen;


