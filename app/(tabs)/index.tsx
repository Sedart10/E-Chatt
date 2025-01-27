import { StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { launchImageLibrary } from 'react-native-image-picker';


const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);

const handleMessagePress = (messageId: string) => {
  setSelectedMessageId(messageId);
};

const renderItem = ({ item }: { item: { id: string; text: string; sender: 'me' | 'other' } }) => (
  <TouchableOpacity
    onPress={() => handleMessagePress(item.id)}
    style={[
      styles.messageContainer,
      item.sender === 'me' ? styles.myMessage : styles.otherMessage,
      item.id === selectedMessageId && styles.selectedMessage,
      item.sender === 'other' && styles.otherMessagePressed,
    ]}
  >
    <ThemedText style={styles.messageText}>{item.text}</ThemedText>
  </TouchableOpacity>
);

export default function HomeScreen() {

  const [messages, setMessages] = useState<{ text?: string; uri?: string; type?: string; sender: 'me' | 'other'; username?: string }[]>([]);
  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);
  const [inputText, setInputText] = useState('');
  const [editingMessageIndex, setEditingMessageIndex] = useState<number | null>(null);

  const exampleUsers: { text: string; sender: 'me' | 'other'; username: string }[] = [
    { text: 'Where are you?', sender: 'other', username: 'John' },
    { text: 'Hello ', sender: 'other', username: 'Marry' },
    { text: 'How are you ?', sender: 'other', username: 'Alex' },
  ];

  // Mesaj gönderme işlevi
  const handleSend = () => {
    if (inputText.trim()) {
      if (editingMessageIndex !== null) {
        handleEditMessage(editingMessageIndex, inputText.trim());
      } else {
        setMessages([...messages, { text: inputText.trim(), sender: 'me' }]);
      }
      setInputText('');
      setEditingMessageIndex(null);
    }
  };

  // Mesaj düzenleme işlevi
  const handleEditMessage = (index: number, newText: string) => {
    const updatedMessages = messages.map((msg, i) => i === index ? { ...msg, text: newText } : msg);
    setMessages(updatedMessages);
  };

  // Mesaj seçme/toggle işlevi
  const toggleSelectMessage = (index: number) => {
    if (selectedMessages.includes(index)) {
      setSelectedMessages(selectedMessages.filter((i) => i !== index));
    } else {
      setSelectedMessages([...selectedMessages, index]);
    }
  };

  // Seçilen mesajları silme işlevi
  const deleteSelectedMessages = () => {
    setMessages(messages.filter((_, i) => !selectedMessages.includes(i)));
    setSelectedMessages([]);
  };

  // Görüntü seçme işlevi
  const handleSelectMedia = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        const selectedAsset = response.assets[0];
        setMessages([...messages, { uri: selectedAsset.uri, type: selectedAsset.type, sender: 'me' }]);
      }
    });
  };

  // Örnek kullanıcıları ekleme
  const addExampleUsers = () => {
    setMessages([...messages, ...exampleUsers]);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
      </ThemedView>
      <ThemedText style={styles.titleText} type="title">E-CHAT</ThemedText>
      <ThemedView style={styles.titleLine} />

      <ThemedView style={styles.chatContainer}>
        {selectedMessages.length > 0 ? (
          <TouchableOpacity onPress={deleteSelectedMessages} style={styles.deleteAllButton}>
            <ThemedText style={styles.deleteAllButtonText}>Delete Selected</ThemedText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={addExampleUsers} style={styles.addExampleUsersButton}>
            <ThemedText style={styles.addExampleUsersButtonText}>Add Sample Contacts</ThemedText>
          </TouchableOpacity>
        )}
        <FlatList
          data={messages}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onLongPress={() => setEditingMessageIndex(index)}
              onPress={() => toggleSelectMessage(index)}
            >
              <ThemedView
                style={[
                  styles.message,
                  item.sender === 'me' ? styles.myMessage : styles.otherMessage,
                ]}
              >
                {item.username && <ThemedText style={styles.username}>{item.username}:</ThemedText>}
                {item.type && item.type.startsWith('image') ? (
                  <Image source={{ uri: item.uri }} style={styles.media} />
                ) : (
                  <ThemedText>{item.text}</ThemedText>
                )}
              </ThemedView>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.messageContainer}
        />
      </ThemedView>

      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: 'white', borderWidth: 0, borderBottomWidth: 0 }]}
          placeholder="Type a message..."
          placeholderTextColor="#666"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={handleSelectMedia}>
          <Ionicons name="images" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </ThemedView>
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
    alignItems: 'center', // Yatayda ortalama
    justifyContent: 'space-between', // Text ve buton arasına boşluk bırakmak için
    marginBottom: 16,
    borderBottomColor: 'rgba(128, 128, 128, 0.3)',
    paddingBottom: 8,
  },
  titleText: {
    color: '#808080',
    fontStyle: 'normal',

  },
  titleWithMargin: {
    marginTop: 24,
  },
  titleLine: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: 8,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  deleteAllButton: {
    paddingVertical: 10, // Dikey dolgu
    paddingHorizontal: 16, // Yatay dolgu
    backgroundColor: 'black', // Buton rengi
    borderRadius: 8, // Köşe yuvarlatma
    alignItems: 'center', // Yatayda ortalar
    justifyContent: 'center', // Dikeyde ortalar
  },
  deleteAllButtonText: {
    color: 'white', // Yazı rengi
    fontSize: 14, // Yazı boyutu
    textAlign: 'center', // Çok satır olursa ortalamaya devam eder
  },
  addExampleUsersButton: {
    paddingVertical: 10, // Dikey dolgu
    paddingHorizontal: 16, // Yatay dolgu
    backgroundColor: 'black', // Buton rengi
    borderRadius: 8, // Köşe yuvarlatma
    alignItems: 'center', // Yatayda ortalar
    justifyContent: 'center', // Dikeyde ortalar
  },
  addExampleUsersButtonText: {
    color: 'white', // Yazı rengi
    fontSize: 14, // Yazı boyutu
    textAlign: 'center', // Çok satır olursa ortalamaya devam eder
  },

  messageContainer: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  inputContainer: {
    backgroundColor: '#000000',
    borderRadius: 24,
    padding: 12,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 16,
    padding: 8,
    color: 'white',
    borderWidth: 0,
    borderBottomWidth: 0,
    flex: 1,
  },
  message: {
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
    maxWidth: '80%',
    alignSelf: 'flex-end',
  },
  myMessage: {
    backgroundColor: '#1a1a1a',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#3a3a3a',
    alignSelf: 'flex-start',
  },
  media: {
    width: 200,
    height: 200,
    borderRadius: 16,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  selectedMessage: {
    borderColor: '#007AFF',
    borderWidth: 1,
  },
  messageText: {
    fontSize: 16,
  },
  otherMessagePressed: {
    backgroundColor: '#3339ff',
  },

});
