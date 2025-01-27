import { StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { Collapsible } from '@/components/Collapsible';

const exampleContacts = [
    { id: '1', name: 'Sam ', lastMessage: 'Okey!', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '2', name: 'Alex ', lastMessage: 'I take it.', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '3', name: 'Peter', lastMessage: 'See you soon', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '4', name: 'John', lastMessage: 'Finish the project.', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '5', name: 'Tadic', lastMessage: 'Mission accomplished!', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
];

export interface Contact {
    id: string;
    name: string;
    lastMessage: string;
    profilePhoto: string;
}

const ContactItem = ({ contact, onPress }: { contact: { id: string; name: string; lastMessage: string; profilePhoto: string }; onPress: () => void }) => (
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

    const handleContactPress = (contact: { id: string }) => {
        openChat(contact.id);
    };

    function openChat(id: string) {
        console.log(`Opening chat for Contacts ID: ${id}`);
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.titleContainer}>
            </ThemedView>
            {/* Title */}
            <ThemedText style={styles.titleText} type="title">E-CHAT</ThemedText>
            <FlatList
                data={exampleContacts}
                renderItem={({ item }) => (
                    <ContactItem contact={item} onPress={() => handleContactPress(item)} />
                )}
                keyExtractor={item => item.id}
            />
            {/* New Chat  */}
            <Collapsible title="Add New Contact" >
                <ThemedView style={styles.collapsibleTitle}>
                    <ThemedText style={styles.subTitleText}>Add New Contact</ThemedText>
                </ThemedView>
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

