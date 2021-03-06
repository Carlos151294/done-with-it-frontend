import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import Text from '../components/Text';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <KeyboardAvoidingView
            behavior="position" 
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100} >
            <ScrollView>
                <Image
                    style={styles.image}
                    tint="light"
                    preview={{ uri: listing.images[0].thumbnailUrl }}
                    uri={listing.images[0].url} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{listing.title}</Text>
                    <Text style={styles.price}>${listing.price}</Text>
                    <View style={styles.userContainer}>
                        <ListItem
                            image={require('../assets/profile-picture.png')}
                            title='Carlos Flores'
                            subTitle="5 Listings"
                            showChevrons />
                    </View>
                    <ContactSellerForm listing={listing} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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