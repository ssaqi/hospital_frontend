import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get("window");

import IMG from '../../images/time.png'
import ICON from '../../images/Timeicon.png'
import Active from '../../images/Timeapproveicon.png'
function TimeSheetscreen() {
    const [activeScreen, setActiveScreen] = useState('unsubmitted');

    const renderContent = () => {
        switch (activeScreen) {
            case 'unsubmitted':
                return (
                    <View style={styles.main}>
                        <View style={styles.piccon}>

                            <View style={styles.img}>
                                <Image
                                    source={IMG}
                                    style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                                />
                            </View>

                        </View>

                        <View style={styles.textcon}>
                            <Text style={styles.txt2}>
                                There are  an timesheets to review
                            </Text>

                            <View style={{ width: width * 0.08 }}>
                                <View style={{ borderBottomWidth: 5, borderBottomColor: "#FF66C3", borderRadius: 20, bottom: height * 0.01 }}></View>
                            </View>
                            <Text style={{ color: "#989898" }}>
                                Here you will find all the timesheets to reviews,
                                approve and that have been approved from the
                                shifts you’ve worked
                            </Text>
                            <Text style={styles.txt2}>
                                Apply for shifts now and come back to this screen once you’ve worked them
                            </Text>

                            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: height * 0.03 }}>
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('viewtimesheet')} >
                                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 18 }}>
                                        Browse sheet
                                    </Text>
                                </TouchableOpacity>
                            </View>


                        </View>

                        {/* <View style={{backgroundColor:"#fff",top:height*0.01}}>
              <Tabbar/>
            </View> */}
                    </View>
                );
            case 'timesheet':
                return (
                    <View style={styles.main}>
                        <View style={styles.contentTimesheet}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.iconbg}>

                                    <View style={styles.icon}>
                                        <Image
                                            source={ICON}
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="center"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: width * 0.02 }}>
                                    <Text style={{ color: "#000", fontWeight: "700" }}>
                                        JAMES BONE
                                    </Text>
                                    <Text style={{ color: "#605D5D", fontWeight: "600" }}>
                                        Waiting For Approve
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "#000", fontWeight: "700" }}>
                                    $130
                                </Text>
                                <Text style={{ color: "#000", fontWeight: "500" }}>
                                    Jun
                                </Text>
                            </View>
                        </View>

                        <View style={styles.contentTimesheet}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.icon2bg}>

                                    <View style={styles.icon}>
                                        <Image
                                            source={Active}
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="center"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: width * 0.02 }}>
                                    <Text style={{ color: "#000", fontWeight: "700" }}>
                                        JAMES BONE
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "600" }}>
                                        Approve
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "#000", fontWeight: "700" }}>
                                    $130
                                </Text>
                                <Text style={{ color: "#000", fontWeight: "500" }}>
                                    Jun
                                </Text>
                            </View>
                        </View>

                        <View style={styles.contentTimesheet}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.icon2bg}>

                                    <View style={styles.icon}>
                                        <Image
                                            source={Active}
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="center"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: width * 0.02 }}>
                                    <Text style={{ color: "#000", fontWeight: "700" }}>
                                        JAMES BONE
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "600" }}>
                                        Approve
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "#000", fontWeight: "700" }}>
                                    $130
                                </Text>
                                <Text style={{ color: "#000", fontWeight: "500" }}>
                                    Jun
                                </Text>
                            </View>
                        </View>

                        <View style={styles.contentTimesheet}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.icon2bg}>

                                    <View style={styles.icon}>
                                        <Image
                                            source={Active}
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="center"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: width * 0.02 }}>
                                    <Text style={{ color: "#000", fontWeight: "700" }}>
                                        JAMES BONE
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "600" }}>
                                        Approve
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "#000", fontWeight: "700" }}>
                                    $130
                                </Text>
                                <Text style={{ color: "#000", fontWeight: "500" }}>
                                    Jun
                                </Text>
                            </View>
                        </View>

                        <View style={styles.contentTimesheet}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.icon2bg}>

                                    <View style={styles.icon}>
                                        <Image
                                            source={Active}
                                            style={{ width: "100%", height: "100%" }}
                                            resizeMode="center"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: width * 0.02 }}>
                                    <Text style={{ color: "#000", fontWeight: "700" }}>
                                        JAMES BONE
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "600" }}>
                                        Approve
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "#000", fontWeight: "700" }}>
                                    $130
                                </Text>
                                <Text style={{ color: "#000", fontWeight: "500" }}>
                                    Jun
                                </Text>
                            </View>
                        </View>

                    </View>
                );
            case 'payment':
                return (
                    <View style={styles.main}>
                        <Text>Upcoming</Text>
                        <View style={styles.textcon}>
                            <Text style={styles.txt2}>
                                No Upcoming Payments
                            </Text>

                            <View style={{ width: width * 0.08 }}>
                            </View>
                            <Text style={{ color: "#989898" }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </Text>

                            <View>
                                <Text>
                                    PAID
                                </Text>
                            </View>

                            <View style={styles.contentTimesheet}>
                                <View style={{ flexDirection: "row" }}>

                                    <View style={{ marginHorizontal: width * 0.02 }}>
                                        <Text style={{ color: "#000", fontWeight: "700" }}>
                                            $130.03
                                        </Text>
                                        <Text style={{ color: "#000", fontWeight: "400" }} >
                                            3 shifts
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "#000", fontWeight: "600" }}>
                                        31 May-07 Jun
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "400" }}>
                                        See details
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.contentTimesheet}>
                                <View style={{ flexDirection: "row" }}>

                                    <View style={{ marginHorizontal: width * 0.02 }}>
                                        <Text style={{ color: "#000", fontWeight: "700" }}>
                                            $130.03
                                        </Text>
                                        <Text style={{ color: "#000", fontWeight: "400" }} >
                                            3 shifts
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "#000", fontWeight: "600" }}>
                                        31 May-07 Jun
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "400" }}>
                                        See details
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.contentTimesheet}>
                                <View style={{ flexDirection: "row" }}>

                                    <View style={{ marginHorizontal: width * 0.02 }}>
                                        <Text style={{ color: "#000", fontWeight: "700" }}>
                                            $130.03
                                        </Text>
                                        <Text style={{ color: "#000", fontWeight: "400" }} >
                                            3 shifts
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "#000", fontWeight: "600" }}>
                                        31 May-07 Jun
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "400" }}>
                                        See details
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.contentTimesheet}>
                                <View style={{ flexDirection: "row" }}>

                                    <View style={{ marginHorizontal: width * 0.02 }}>
                                        <Text style={{ color: "#000", fontWeight: "700" }}>
                                            $130.03
                                        </Text>
                                        <Text style={{ color: "#000", fontWeight: "400" }} >
                                            3 shifts
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "#000", fontWeight: "600" }}>
                                        31 May-07 Jun
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "400" }}>
                                        See details
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.contentTimesheet}>
                                <View style={{ flexDirection: "row" }}>

                                    <View style={{ marginHorizontal: width * 0.02 }}>
                                        <Text style={{ color: "#000", fontWeight: "700" }}>
                                            $130.03
                                        </Text>
                                        <Text style={{ color: "#000", fontWeight: "400" }} >
                                            3 shifts
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "#000", fontWeight: "600" }}>
                                        31 May-07 Jun
                                    </Text>
                                    <Text style={{ color: "#FF66C3", fontWeight: "400" }}>
                                        See details
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
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
                    style={[styles.findshift, getButtonStyles('unsubmitted')]}
                    onPress={() => setActiveScreen('unsubmitted')}
                >
                    <Text style={{ fontSize: 10, fontWeight: "700", ...getButtonStyles('unsubmitted') }}>
                        Unsubmitted
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.location, getButtonStyles('timesheet')]}
                    onPress={() => setActiveScreen('timesheet')}
                >
                    <Text style={{ fontSize: 10, fontWeight: "700", ...getButtonStyles('timesheet') }}>
                        Timesheets
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.location, getButtonStyles('payment')]}
                    onPress={() => setActiveScreen('payment')}
                >
                    <Text style={{ fontSize: 10, fontWeight: "700", ...getButtonStyles('payment') }}>
                        Payments
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
        paddingHorizontal: width * 0.025
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
    piccon: {

        width: width * 0.9,
        height: height * 0.4,
        backgroundColor: "#fff",
        alignItems: "center"
    },
    img: {
        width: width * 0.7,
        height: height * 0.38,
    },
    textcon: {

        width: width * 0.9,
        height: height * 0.36,
        backgroundColor: "#fff",

    },
    txt2: {

        color: "#000",
        fontWeight: "700",
        fontSize: 16,
        marginVertical: height * 0.02,
        justifyContent: "center"

    },

    btn: {

        width: width * 0.8,
        height: height * 0.07,
        backgroundColor: "#FF66C3",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    contentTimesheet: {

        flexDirection: "row",
        backgroundColor: "#fff",
        height: height * 0.12,
        justifyContent: "space-between",
        alignItems: "center",

    },

    iconbg: {
        paddingHorizontal: width * 0.03,
        height: height * 0.05,
        backgroundColor: "#FF66C3",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"

    },
    icon: {
        width: width * 0.05,
        height: height * 0.04,


    },
    icon2bg: {
        paddingHorizontal: width * 0.024,
        height: height * 0.05,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#FF66C3",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"

    }


})


export default TimeSheetscreen;







