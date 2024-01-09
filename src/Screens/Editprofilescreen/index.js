import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import Arrowback from '../../Components/Arrowback'
const { width, height } = Dimensions.get("window")
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

function Editprofilescreen() {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState(null);

    const data = [
        { id: '1', title: 'Personal details', },
        { id: '2', title: 'Contact information' },
        { id: '3', title: 'Verified skills' },
        { id: '4', title: 'Work history' },
        { id: '5', title: 'Roles' },
        { id: '6', title: 'Order a uniform' },
        { id: '7', title: 'Delete account ' },
        // Add more items as needed
    ];


    const handleNavigation = (item) => {
        switch (item.id) {
            case '1':
                navigation.navigate('detailscreen');
                break;
            case '2':
                navigation.navigate('ContactInformation');
                break;
            case '3':
                navigation.navigate('VerifiedSkills');
                break;
            // Add cases for other items

            default:
                break;
        }
    };


    const renderItem = ({ item }) => {
        const isSelected = selectedItem === item.id;

        return (
            <TouchableOpacity
                style={[
                    styles.context,
                    {
                        backgroundColor: isSelected ? '#FF66C3' : 'white',
                        alignItems: "center"
                    },
                ]}
                onPress={() => {
                    setSelectedItem(item.id);
                    handleNavigation(item);
                }}
            >
                <Text style={[styles.txt, { color: isSelected ? 'white' : '#989898' }]}>{item.title}</Text>
                <AntDesign name="right" size={13} color={isSelected ? 'white' : '#FF66C3'} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.main}>
            {/* Your existing code */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Arrowback navigation={navigation} />


                <View style={{ paddingHorizontal: width * 0.25, paddingVertical: height * 0.02 }}>
                    <Text style={{ color: "#8A8A8A", fontWeight: '600', alignSelf: "center" }}>
                        Edit my profile
                    </Text>
                </View>

            </View>

            <View>
                <View style={styles.contentcon}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedItem}
                    />
                </View>
            </View>
        </View>
    );
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
    txt: {

        color: "#989898",
        fontWeight: "600",
        padding: 6

    }

})

export default Editprofilescreen
