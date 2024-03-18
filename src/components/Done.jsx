import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { getCompletedVoiceNotes } from '../helpers/CompletedNotes';
import { useFocusEffect } from '@react-navigation/native';

export function Done() {
  const [completedVoiceNotes, setCompletedVoiceNotes] = useState([]);


  useEffect(() => {
    const loadCompletedVoiceNotes = async () => {
      try {
        const completedNotes = await getCompletedVoiceNotes();
        setCompletedVoiceNotes(completedNotes);
      } catch (error) {
        console.error('Error al cargar las notas de voz completadas:', error);
      }
    };

    loadCompletedVoiceNotes();
  }, []);

  useFocusEffect(() => {
    getCompletedVoiceNotes();
  });

  const renderCompletedVoiceNote = ({ item }) => (
    <View style={styles.voiceNoteContainer}>
      <Text style={styles.voiceNoteName}>{item[0]}</Text>
      <Text style={styles.voiceNoteDate}>{item[2]}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notas de voz completadas</Text>
      <FlatList
        data={completedVoiceNotes}
        renderItem={renderCompletedVoiceNote}
        keyExtractor={(item) => item[0]} // Usar el nombre como clave única
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 10,
    alignSelf: 'center'
  },
  voiceNoteContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  voiceNoteName: {
    color: 'rgba(66, 155, 255, 0.66)',
    fontSize: 16,
  },
  voiceNoteDate: {
    fontSize: 12,
    color: '#888',
  },
});
