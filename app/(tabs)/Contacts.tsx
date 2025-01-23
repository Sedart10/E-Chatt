import { StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { Collapsible } from '@/components/Collapsible';

const exampleContacts = [
    { id: '1', name: 'Aziz YILDIRIM', lastMessage: 'beni konuşturmayın', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '2', name: 'Ali KOC', lastMessage: 'Bu sene net sampiyonuz', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '3', name: 'Recep Tayyip ERDOGAN', lastMessage: 'Ya Allah!!', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '4', name: 'Umit Demritas', lastMessage: 'Projeyi bitir.', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '5', name: 'Tadic', lastMessage: 'Mission accomplished!', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
];

interface Contact {
    id: string;
    name: string;
    lastMessage: string;
    profilePhoto: string;
}

const ContactItem = ({ contact, onPress }: { contact: Contact; onPress: () => void }) => (
    <TouchableOpacity onPress={onPress}>
        <ThemedView style={styles.contactItem}>
            <Image source={{ uri: contact.profilePhoto }} style={styles.profilePhoto} />
            <ThemedView style={styles.contactInfo}>
                <ThemedText style={styles.name}>{contact.name}</ThemedText>
                <ThemedText style={styles.lastMessage}>{contact.lastMessage}</ThemedText>
            </ThemedView>
        </ThemedView>
    </TouchableOpacity>
);

export default function ContactsScreen() {
    const navigation = useNavigation();

    const handleContactPress = (contact: Contact) => {
        const sampleConversation = [
            { text: "Hello!", sender: "me", username: "You" },
            { text: "Hi, how are you?", sender: "other", username: contact.name },
            { text: "I'm good, thanks! How about you?", sender: "me", username: "You" },
            { text: "I'm doing well, thank you!", sender: "other", username: contact.name },
        ];


    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.titleContainer}>
            </ThemedView>
            <ThemedText style={styles.titleText} type="title">CONTACTS</ThemedText>
            <FlatList
                data={exampleContacts}
                renderItem={({ item }) => (
                    <ContactItem contact={item} onPress={() => handleContactPress(item)} />
                )}
                keyExtractor={item => item.id}
            />

            <Collapsible title="New Chat">
                <ThemedText>+ New Person</ThemedText>
            </Collapsible>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16,

        borderBottomColor: 'rgba(128, 128, 128, 0.3)',
        paddingBottom: 8,
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleText: {
        color: '#808080',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subTitleText: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 12,
    },
    collapsibleTitle: {
        marginVertical: 8,
    },
    contactItem: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    profilePhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    contactInfo: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        fontSize: 14,
        color: '#4fff33',
    },
});