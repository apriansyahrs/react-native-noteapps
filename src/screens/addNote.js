import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, SafeAreaView } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const AddNote = ({ setCurrentPage, addNote }) => {
  // State untuk menyimpan judul dan deskripsi catatan baru
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    // SafeAreaView digunakan untuk menghindari area yang tidak dapat digunakan pada perangkat tertentu (seperti notch pada iPhone)
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tambahkan Note</Text>
      </View>
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
          backgroundColor="#006FFD"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            addNote(title, desc); // Menambahkan catatan baru menggunakan fungsi dari props
            setCurrentPage('home'); // Mengubah halaman saat ini ke 'home'
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage('home')} // Kembali ke halaman utama
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 24 : 0 // Menyesuaikan padding untuk SafeArea pada Android
  },
  header: {
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 20,
  },
});

export default AddNote;
