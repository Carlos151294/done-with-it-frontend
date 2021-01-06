import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import useAuth from '../auth/useAuth';

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
        color: 'white',
        targerScreen: 'Messages'
    },
];

const AccountScreen = ({ navigation }) => {
    const { user, logout } = useAuth();

    return (
        <Screen style={styles.screen}>
            <ListItem
                style={styles.userItem}
                title={user.name}
                subTitle={user.email}
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
                            IconComponent={
                                <Icon name={item.icon} color={item.color} backgroundColor={item.iconBackgroundColor} size={40} />
                            }
                            onPress={() => navigation.navigate(item.targerScreen)}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>

            <ListItem
                style={styles.logoutItem}
                title="Log Out"
                IconComponent={<Icon name='logout' color='white' backgroundColor='tertiary' size={40} />}
                onPress={logout}
            />

        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
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