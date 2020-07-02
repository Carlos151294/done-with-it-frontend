import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen'
import Card from '../components/Card';

export default function ListingsScreen() {
    const [refreshing, setRefreshing] = useState(false);

    const listings = [
        {
            id: 1,
            title: 'Red jacket for sale',
            subTitle: '$100',
            image: require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title: 'Couch in great condition',
            subTitle: '$2,000',
            image: require('../assets/couch.jpg')
        }
    ];
    return (
        <Screen backgroundColor='light'>
            <View style={styles.container}>
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            subTitle={item.subTitle}
                            image={item.image}
                        />
                    }
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    refreshing={refreshing}
                    onRefresh={() => console.log('Refreshing...')}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    separator: {
        height: 20
    }
})

