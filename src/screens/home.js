import React from 'react';
import { FlatList, StyleSheet, View, Text, Platform, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomButton from '../components/customButton';

// Komponen untuk menampilkan setiap catatan
const NoteCard = ({ item, setCurrentPage, deleteNote, setCurrentNoteId }) => (
  <TouchableOpacity style={styles.card} onPress={() => {
    setCurrentNoteId(item.id); // Menetapkan ID catatan yang sedang diedit
    setCurrentPage('edit'); // Mengubah halaman saat ini ke 'edit'
  }}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDesc}>{item.desc}</Text>
    <View style={styles.buttons}>
      <TouchableOpacity onPress={() => {
          setCurrentNoteId(item.id); // Menetapkan ID catatan yang sedang diedit
          setCurrentPage('edit'); // Mengubah halaman saat ini ke 'edit'
        }}>
        <Text style={styles.editText}>Ubah</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
          deleteNote(item.id); // Menghapus catatan berdasarkan ID
        }}>
        <Text style={styles.deleteText}>Hapus</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

// Komponen utama untuk menampilkan halaman beranda
const Home = ({ noteList, setCurrentPage, deleteNote, setCurrentNoteId }) => (
    <SafeAreaView style={styles.container}>
      <CustomButton
        backgroundColor="#915DD2"
        color="#fff"
        text="Tambahkan Note"
        width="100%"
        onPress={() => {
          setCurrentPage('add'); // Mengubah halaman saat ini ke 'add'
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList} // Data catatan yang akan ditampilkan dalam daftar
        renderItem={({ item }) => (
          <NoteCard 
            item={item} 
            setCurrentPage={setCurrentPage} 
            deleteNote={deleteNote} 
            setCurrentNoteId={setCurrentNoteId} 
          />
        )}
        keyExtractor={(item) => item.id} // Menetapkan ID unik untuk setiap item dalam daftar
      />
    </SafeAreaView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 0 // Menyesuaikan padding untuk SafeArea pada Android
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 1,
  },
  cardTitle: {
    fontWeight: '700',
    color: '#203239',
    fontSize: 18,
    marginBottom: 5,
  },
  cardDesc: {
    color: '#203239',
    fontSize: 14,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  editText: {
    color: '#E99A00',
    fontWeight: '500',
  },
  deleteText: {
    color: '#D82148',
    fontWeight: '500',
  },
});

export default Home;
