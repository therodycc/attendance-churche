import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


const cardTitle = 45;
const cardPadding = 10;
const { height } = Dimensions.get('window');


const Card = () => {

    return <View style={[styles.card]} >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>21</Text>
    </View>;
}

export default Card

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#d8f3dc',
        padding: cardPadding,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderTopStartRadius: 20,
    },
});

