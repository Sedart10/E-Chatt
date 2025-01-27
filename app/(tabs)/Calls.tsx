import { StyleSheet, Image, Platform, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';


const exampleCalls = [
  {
    id: '1',
    name: 'Donald Trump',
    time: '10:30 AM',
    date: 'Today',
    type: 'incoming',
    missed: false,
    icon: 'phone',
  },
  {
    id: '2',
    name: 'Marry Jane Waston',
    time: 'Yesterday',
    date: 'Yesterday',
    type: 'outgoing',
    missed: false,
    icon: 'phone',
  },
  {
    id: '3',
    name: 'Alice',
    time: '2 days ago',
    date: '2 days ago',
    type: 'incoming',
    missed: false,
    icon: 'phone',
  }, {
    id: '4',
    name: 'Peter Parker',
    time: '3 days ago',
    date: '3 days ago',
    type: 'incoming',
    missed: true,
    icon: 'phone',
  }, {
    id: '5',
    name: 'John Doe',
    time: '10 days ago',
    date: '10 days ago',
    type: 'incoming',
    missed: true,
    icon: 'phone',
  }, {
    id: '6',
    name: 'Jane Doe',
    time: '4 days ago',
    date: '4 days ago',
    type: 'incoming',
    missed: true,
    icon: 'phone',
  },
];

const CallItem = ({ call }: { call: { name: string; type: string; missed: boolean; time: string } }) => (
  <ThemedView style={styles.callItem}>
    <ThemedView style={styles.avatar}>
      <ThemedText style={styles.avatarText}>{call.name[0]}</ThemedText>
    </ThemedView>
    <ThemedView style={styles.callInfo}>
      <ThemedText style={styles.name}>{call.name}</ThemedText>
      <ThemedView style={styles.callDetails}>
        <IconSymbol
          name="phone"
          size={16}
          color="#808080"
        />
        <IconSymbol
          name={call.type === 'incoming' ? 'arrow.down.left' : 'arrow.up.right'}
          size={16}
          color={call.missed ? '#FF4B4B' : '#4CAF50'}
        />
        <ThemedText style={styles.time}>{call.time}</ThemedText>
      </ThemedView>
    </ThemedView>
  </ThemedView>
);

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
      </ThemedView>
      <ThemedText style={styles.titleText} type="title">CALLS</ThemedText>
      <FlatList
        data={exampleCalls}
        renderItem={({ item }) => <CallItem call={item} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
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
  },
  list: {
    flex: 1,
  },
  callItem: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#757586',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  callInfo: {
    flex: 1,
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
    color: '#808080',
    fontStyle: 'normal',
  },
});
