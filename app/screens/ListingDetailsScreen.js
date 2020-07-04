import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Text from '../components/Text';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen() {
    return (
        <View>
            <Image
                style={styles.image}
                source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red Jacket for Sale</Text>
                <Text style={styles.price}>$100</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/profile-picture.png')}
                        title='Carlos Flores'
                        subTitle="5 Listings" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;