import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList,  } from 'react-native';

import AppText from '../components/Text';
import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Screen from '../components/Screen'
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

export default function ListingsScreen({ navigation }) {
    const { data, loading, error, request: loadListings } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();    
    }, []);

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                { error && 
                    <React.Fragment>
                        <View style={styles.error}>
                            <AppText>Couldn't retrieve the listings.</AppText>
                            <Button title="Retry" onPress={loadListings} /> 
                        </View>
                    </React.Fragment>
                }
                {loading && <ActivityIndicator visible={loading} />}
                {!loading && 
                    <FlatList
                        data={data}
                        keyExtractor={listing => listing.id.toString()}
                        renderItem={({ item }) =>
                            <Card
                                title={item.title}
                                subTitle={item.subTitle}
                                imageUrl={item.images[0].url}
                                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                                thumbnailUrl={item.images[0].thumbnailUrl}
                            />
                        }
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        // refreshing={refreshing}
                        // onRefresh={() => console.log('Refreshing...')}
                    />}
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    separator: {
        height: 20
    },
    error: {
        width: '100%',
        alignItems: 'center'
    }
})

