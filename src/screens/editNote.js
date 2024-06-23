import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, SafeAreaView } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ setCurrentPage, editNote, noteList, noteId }) => {
  // State untuk menyimpan judul dan deskripsi catatan yang akan diedit
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Mengambil data catatan yang akan diedit berdasarkan noteId
  useEffect(() => {
    const noteToEdit = noteList.find(note => note.id === noteId);
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setDesc(noteToEdit.desc);
    }
  }, [noteId, noteList]);

  // Fungsi untuk menangani penyimpanan perubahan catatan
  const handleEditNote = () => {
    editNote(noteId, title, desc); // Mengedit catatan menggunakan fungsi dari props
    setCurrentPage('home'); // Mengubah halaman saat ini ke 'home'
  };

  return (
    // SafeAreaView digunakan untuk menghindari area yang tidak dapat digunakan pada perangkat tertentu (seperti notch pada iPhone)
    <SafeAreaView style={styles.container}>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#915DD2"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={handleEditNote}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 0 // Menyesuaikan padding untuk SafeArea pada Android
  },
  spacerTop: {
    marginTop: 16,
  },
});

export default EditNote;
