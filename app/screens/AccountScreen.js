import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon';

const AccountScreen = () => {
    const tabs = [
        {
            id: 1,
            title: "My Listings",
            icon: 'format-list-bulleted',
            iconBackgroundColor: 'primary',
            color: 'white'
        },
        {
            id: 2,
            title: "My Messages",
            icon: 'email',
            iconBackgroundColor: 'secondary',
            color: 'white'
        },
    ];
    return (
        <Screen backgroundColor='light'>
            <ListItem
                style={styles.userItem}
                title="Carlos Fn"
                subTitle="carlos.floresnava@stefanini.com"
                image={require('../assets/happy.jpeg')}
                onPress={() => console.log('item pressed')}
            />

            <View style={styles.tabsContainer}>
                <FlatList
                    data={tabs}
                    keyExtractor={tab => tab.id.toString()}
                    renderItem={({ item }) =>
                        <ListItem
                            style={styles.tabItem}
                            title={item.title}
                            IconComponent={<Icon name={item.icon} color={item.color} backgroundColor={item.iconBackgroundColor} size={40} />}
                            onPress={() => console.log('item pressed')}
                        />
                    }
                    ItemSeparatorComponent={() => <ListItemSeparator />}
                />
            </View>

            <ListItem
                style={styles.logoutItem}
                title="Log Out"
                IconComponent={<Icon name='logout' color='white' backgroundColor='tertiary' size={40} />}
                onPress={() => console.log('item pressed')}
            />

        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userItem: {
        marginTop: 20,
        backgroundColor: colors.white
    },
    tabsContainer: {
        marginTop: 40
    },
    tabItem: {
        backgroundColor: colors.white
    },
    logoutItem: {
        marginTop: 20,
        backgroundColor: colors.white
    }
})


export default AccountScreen;