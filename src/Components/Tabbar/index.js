import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

function Tabbar() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('home'); // Initialize with the default selected tab

  const handleTabPress = (tab) => {
    navigation.navigate(tab);
    setSelectedTab(tab);
  };

  const getIconColor = (tab) => (selectedTab === tab ? "#FF66C3" : "#000"); // Change to pink if selected, else black
  const getTextColor = (tab) => (selectedTab === tab ? "#FF66C3" : "#000"); // Change to pink if selected, else black

  return (
    <View style={styles.main}>
      <View style={styles.tab}>
        <View style={styles.tabicon}>
          <TouchableOpacity style={styles.icon} onPress={() => handleTabPress('homepagehomecare')}>
            <Feather name="home" size={20} color={getIconColor('home')} />
            <Text style={[styles.txt, { color: getTextColor('home') }]}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => handleTabPress('browse')}>
            <Feather name="search" size={22} color={getIconColor('browse')} />
            <Text style={[styles.txt, { color: getTextColor('browse') }]}>Browse</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => handleTabPress('shifts')}>
            <Ionicons name="briefcase-outline" size={20} color={getIconColor('myShifts')} />
            <Text style={[styles.txt, { color: getTextColor('myShifts') }]}>My shifts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => handleTabPress('sheets')}>
            <Feather name="folder" size={20} color={getIconColor('timesheets')} />
            <Text style={[styles.txt, { color: getTextColor('timesheets') }]}>Timesheets</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => handleTabPress('prof')}>
            <Feather name="user" size={20} color={getIconColor('profile')} />
            <Text style={[styles.txt, { color: getTextColor('profile') }]}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    width: width * 0.92,
    height: height * 0.07,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  tabicon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.06,
    alignItems: "center",
  },
  icon: {
    paddingVertical: height * 0.008,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontWeight: "700",
    fontSize: 12,
  },
});

export default Tabbar;
 