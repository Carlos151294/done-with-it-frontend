import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';
import logger from '../utility/logger';

export default (notificationListener) => { 
    useEffect(() => {
        registerForPushNotifications();

        if (notificationListener) {
            Notifications.addNotificationReceivedListener(notificationListener);
        }
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permission.granted) return;

            const { data: token } = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
        } catch (error) {
            logger.log(error);
        }
    };
};