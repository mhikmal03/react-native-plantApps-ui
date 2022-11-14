import React from 'react'
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';



const width = Dimensions.get("screen").width / 2 - 30;






const Card = ({ plant }) => {
    return (
        <View style={style.card}>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: plant.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0,0,0,0.2)'
                }}>
                    <Icon name="heart" size={20} color={plant.like ? 'red' : 'black'} />
                </View>
            </View>
            <View style={{ height: 100, alignItems: 'center' }}>
                <Image style={{ flex: 1, resizeMode: "contain" }} source={plant.img} />
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
                {plant.name}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    ${plant.price}
                </Text>
                <View
                    style={{
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        backgroundColor: '#5edb80',
                        borderRadius: 5,
                        alignItems: 'center',
                    }}>
                    <Text style ={{ color: 'white', fontSize: 17, fontWeight: "bold" }}>
                        +
                    </Text>
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    card: {
        height: 225,
        backgroundColor: '#f8f8f8',
        width,
        marginHorizontal: 2,
        marginBottom: 20,
        borderRadius: 10,
        padding: 15,
    },
})













export default Card