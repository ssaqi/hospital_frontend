import React from 'react'
import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
const { width, height } = Dimensions.get("window")

function Timesheetview() {
    return (
        <View style={styles.main}>
            <View style={{ paddingHorizontal: width * 0.01, paddingVertical: height * 0.02 }}>
                <Text style={{ color: "#FF66C3", fontWeight: '600' }}>
                    MY SHIFTS
                </Text>
            </View>

            <View style={styles.headbtn}>
                <TouchableOpacity style={styles.findshift}>
                    <Text style={{ color: "#989898", fontSize: 10, fontWeight: "700" }}>
                        Unsubmitted
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.location}>
                    <Text style={{ color: "#989898", fontSize: 10, fontWeight: "700" }}>Timesheets </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.location}>
                    <Text style={{ color: "#989898", fontSize: 10, fontWeight: "700" }}>Payments</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    main: {

        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: width * 0.05
    },
    headbtn: {
        width: width * 0.65,
        marginVertical: height * 0.02,
        flexDirection: "row",
        justifyContent: "space-between"

    },
})

export default Timesheetview
