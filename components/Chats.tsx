import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { ExampleChat } from '@/components/ExampleChat';

type ChatItem = {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
    unread?: number;
};

const chatData: ChatItem[] = [
    {
        id: '1',
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        time: '10:30 AM',
        unread: 2,
    },
    {
        id: '2',
        name: 'Family Group',
        lastMessage: 'Mom: Dinner is ready!',
        time: '9:45 AM',
        unread: 5,
    },
    {
        id: '3',
        name: 'Alice Smith',
        lastMessage: 'See you tomorrow!',
        time: 'Yesterday',
    },
    {
        id: '4',
        name: 'Work Group',
        lastMessage: 'Meeting at 3 PM',
        time: 'Yesterday',
        unread: 1,
    },
];

const ChatItem = ({ item }: { item: ChatItem }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.chatItem}
            onPress={() => {
                console.log('Chat item pressed');
                navigation.navigate('ExampleChat' as never);
            }}
        >
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.name[0]}</Text>
            </View>
            <View style={styles.chatInfo}>
                <View style={styles.chatHeader}>
                    <Text style={styles.chatName}>{item.name}</Text>
                    <Text style={styles.chatTime}>{item.time}</Text>
                </View>
                <View style={styles.chatFooter}>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        {item.lastMessage}
                    </Text>
                    {item.unread && (
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>{item.unread}</Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export function Chats() {
    return (
        <View style={styles.container}>
            <FlatList
                data={chatData}
                renderItem={({ item }) => <ChatItem item={item} />}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    list: {
        flex: 1,
    },
    chatItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#128C7E',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    avatarText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    chatInfo: {
        flex: 1,
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    chatName: {
        fontSize: 16,
        fontWeight: '600',
    },
    chatTime: {
        fontSize: 12,
        color: '#666',
    },
    chatFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastMessage: {
        fontSize: 14,
        color: '#666',
        flex: 1,
        marginRight: 8,
    },
    unreadBadge: {
        backgroundColor: '#25D366',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    unreadText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});