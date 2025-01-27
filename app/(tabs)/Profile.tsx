import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const profile = {
    id: '1',
    name: 'John Doe',
    profilePhoto: 'https://ia801308.us.archive.org/8/items/whatsapp-smiling-guy-i-accidentally-made/whatsapp%20generic%20person%20dark.jpg',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    bio: 'Software Developer at XYZ Company',
};

const ProfileItem = ({ profile }: { profile: { id: string; name: string; profilePhoto: string; email: string; phone: string; bio: string } }) => (
    <ThemedView style={styles.profileItem}>
        <Image source={{ uri: profile.profilePhoto }} style={styles.profilePhoto} />
        <ThemedView style={styles.profileInfo}>
            <ThemedText style={styles.email}>{profile.email}</ThemedText>
            <ThemedText style={styles.phone}>{profile.phone}</ThemedText>
            <ThemedText style={styles.bio}>{profile.bio}</ThemedText>
        </ThemedView>
        {/*   <TouchableOpacity style={styles.editButton}>
            <ThemedText style={styles.editButtonText}>Edit Profile</ThemedText>
        </TouchableOpacity> */}
    </ThemedView>
);

export default function Profile() {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.titleText}>E-CHAT</ThemedText>
                <ThemedView style={styles.profileContainer}>
                    <ProfileItem profile={profile} />
                </ThemedView>
            </ThemedView>

        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1a1a1a',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16,
        borderBottomColor: 'rgba(128, 128, 128, 0.3)',
        paddingBottom: 8,
        marginTop: 50,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#808080',
    },
    profileContainer: {
        backgroundColor: '#333', // Different background color for the profile container
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    profileItem: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileInfo: {
        alignItems: 'center',
    },
    email: {
        fontSize: 16,
        color: '#ccc', // Set text color to light gray
        marginBottom: 5,
    },
    phone: {
        fontSize: 16,
        color: '#ccc', // Set text color to light gray
        marginBottom: 5,
    },
    bio: {
        fontSize: 16,
        color: '#ccc', // Set text color to light gray
        textAlign: 'center',
        marginHorizontal: 20,
    },
    editButton: {
        padding: 10,
        backgroundColor: '#808080',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});