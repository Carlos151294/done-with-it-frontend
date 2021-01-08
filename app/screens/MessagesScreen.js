import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: `The Rise and Fall of Nikola Tesla and his Tower. The inventor’s vision of a global wireless-transmission tower proved to be his undoing`,
        description: `By the end of his brilliant and tortured life, the Serbian physicist, engineer and inventor Nikola Tesla was penniless and living in a small New York City hotel room. He spent days in a park surrounded by the creatures that mattered most to him—pigeons—and his sleepless nights working over mathematical equations and scientific problems in his head. That habit would confound scientists and scholars for decades after he died, in 1943. His inventions were designed and perfected in his imagination. Tesla believed his mind to be without equal, and he wasn’t above chiding his contemporaries, such as Thomas Edison, who once hired him. “If Edison had a needle to find in a haystack,” Tesla once wrote, “he would proceed at once with the diligence of the bee to examine straw after straw until he found the object of his search. I was a sorry witness of such doing that a little theory and calculation would have saved him ninety percent of his labor.”`,
        image: require('../assets/profile-picture.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/profile-picture.png')
    }
];

function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // Call the server to delete the message
        // Delete from messages array
        setMessages(messages.filter(msg => msg.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        showChevrons
                        onPress={() => {}}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        }
                    />
                }
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: 'T1',
                            description: 'D1',
                            image: require('../assets/profile-picture.png')
                        }
                    ]);
                }}
            />
        </Screen>
    );
}

export default MessagesScreen;