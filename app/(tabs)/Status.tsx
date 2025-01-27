import { useState } from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Chats } from '@/components/Chats'


const stories = [
    { id: '1', name: 'My Story', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '2', name: 'Marry ', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '3', name: 'Jane Smith', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '4', name: 'Peter', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '5', name: 'John', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '6', name: 'Tadic', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '7', name: 'Ashe', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '8', name: 'Alice', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
    { id: '9', name: 'Brad', profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg' },
];

const StoryItem = ({ story }: { story: { id: string; name: string; profilePhoto: string } }) => (
    <TouchableOpacity style={styles.storyItem}>
        <Image source={{ uri: story.profilePhoto }} style={styles.storyPhoto} />
        <ThemedText style={styles.storyName}>{story.name}</ThemedText>
    </TouchableOpacity>
);

export default function Status() {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText style={styles.titleText}>E-CHAT</ThemedText>
            </ThemedView>
            <ThemedView>
                <FlatList
                    data={stories}
                    renderItem={({ item }) => <StoryItem story={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.storiesContainer}
                />
            </ThemedView>
            <ThemedView>
                <Chats />
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16,
        borderBottomColor: 'rgba(128, 128, 128, 0.3)',
        paddingBottom: 8,
        marginTop: 50,
    },
    list: {
        flex: 1,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    avatarText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    callDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    time: {
        fontSize: 14,
        color: '#808080',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#808080',
    },
    storiesContainer: {
        paddingVertical: 10,
    },
    storyItem: {
        alignItems: 'center',
        marginRight: 16,
    },
    storyPhoto: {
        width: 80, // Increased width
        height: 80, // Increased height
        borderRadius: 40, // Adjusted border radius to match new size
        marginBottom: 5,
    },
    storyName: {
        fontSize: 14, // Increased font size
        color: '#fff',
    },
});
