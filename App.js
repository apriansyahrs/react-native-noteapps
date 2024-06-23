import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const App = () => {
  // State untuk menyimpan halaman saat ini ('home', 'add', 'edit')
  const [currentPage, setCurrentPage] = useState('home');

  // State untuk menyimpan daftar catatan
  const [noteList, setNoteList] = useState([
    {
      id: '1',
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  // State untuk menyimpan ID catatan yang sedang diedit
  const [currentNoteId, setCurrentNoteId] = useState(null);

  // Fungsi untuk menambah catatan baru
  const addNote = (title, desc) => {
    const newNote = { id: Date.now().toString(), title, desc };
    setNoteList([...noteList, newNote]);
  };

  // Fungsi untuk mengedit catatan yang sudah ada
  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map(note => 
      note.id === id ? { ...note, title, desc } : note
    );
    setNoteList(updatedNotes);
  };

  // Fungsi untuk menghapus catatan
  const deleteNote = (id) => {
    const updatedNotes = noteList.filter(note => note.id !== id);
    setNoteList(updatedNotes);
  };

  // Variabel untuk menyimpan komponen halaman yang akan ditampilkan
  let PageComponent;

  // Menentukan komponen yang akan dirender berdasarkan currentPage
  switch (currentPage) {
    case 'add':
      PageComponent = <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
      break;
    case 'edit':
      PageComponent = <EditNote setCurrentPage={setCurrentPage} editNote={editNote} noteList={noteList} noteId={currentNoteId} />;
      break;
    default:
      PageComponent = <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setCurrentNoteId={setCurrentNoteId} />;
  }

  // Merender komponen halaman yang sesuai
  return <>{PageComponent}</>;
};

export default App;
