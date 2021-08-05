import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from "../config/color"

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText customStyle={styles.title} >This noice jacket is for sale</AppText>
                <AppText customStyle={styles.price} >$50</AppText>
                <View style={styles.userContainer} >
                    <ListItem image={require('../assets/mosh.jpg')} title="Johny" subTitle="5 listings" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
        paddingVertical: 20
    }
})

export default ListingDetailsScreen;
