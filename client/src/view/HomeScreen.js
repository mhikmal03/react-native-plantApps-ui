import React, { useState } from 'react'
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Card from '../components/Card';
import plants from '../const/plantList';
// icon
const cartIcon = <Icon name="shopping-cart" size={25} color="black" />;
const searchIcon = <Icon name="search" size={20} color="black" style={{ marginLeft: 20 }} />;
const sortIcon = <Icon name="sort-amount-down" size={25} style={{ color: 'white' }} />

// dimensions
const width = Dimensions.get("screen").width / 2 - 30;




const HomeScreen = () => {
    const categories = [
        'POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'
    ];

    const [categoryIdx, setCategoryIdx] = useState(0)

    const categoryList = () => {
        return (
            <View style={style.categoryContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index}
                        activeOpacity={0.8}
                        onPress={() => setCategoryIdx(index)}>
                        <Text style={[style.categoryText, categoryIdx == index && style.categorySelected]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };




    return (
        <SafeAreaView
            style={{
                paddingHorizontal: 20,
                backgroundColor: 'white',
            }}
        >


            <View style={style.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}
                    >Welcome To</Text>
                    <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#5edb80' }}
                    >Plantify</Text>
                </View>
                <View className="icon">
                    {cartIcon}
                </View>
            </View>

            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={style.searchContainer}>
                    {searchIcon}
                    <TextInput placeholder='Search' style={style.input} />
                </View>
                <View style={style.sortBtn}>
                    {sortIcon}
                </View>

            </View>

            {categoryList()}
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={plants}
                renderItem={({ item }) => {
                    return <Card plant={item} />;
                }}
            />


        </SafeAreaView >


    )
}

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: 50,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        flex: 1,
        marginLeft: 5
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: '#5edb80',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    categoryText: {
        color: "grey",
        fontSize: 16,
        fontWeight: 'bold',
    },
    categorySelected: {
        color: '#5edb80',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#5edb80',
    },


})



export default HomeScreen