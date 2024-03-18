import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getArchivedVoices, saveVoiceNote } from '../helpers/SaveAndGet';
import { Audio } from 'expo-av';
import { Feather } from '@expo/vector-icons';
import { DoneButton } from '../assets/DoneButton';
import {markVoiceNoteAsCompleted} from '../helpers/CompletedNotes'
import { useFocusEffect } from '@react-navigation/native';

export function Pendings() {
  const [voiceNotes, setVoiceNotes] = useState([])


  const loadVoiceNotes = async () => {
    try {
      const archivedVoices = await getArchivedVoices();
      setVoiceNotes(archivedVoices);
    } catch (error) {
      console.error('Error al cargar las notas de voz:', error);
    }
  };

  useEffect(() => {
    // Cargar las notas de voz almacenadas al montar el componente
    loadVoiceNotes();
  }, []);


  // Cargar las notas de voz cada vez que la pantalla se enfoque
  useFocusEffect(() => {
    loadVoiceNotes();
  });

  async function playSound(uri) {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync({ uri });
    
      console.log('Playing Sound');
      await sound.playAsync();
    } catch (error) {
      console.error('Error al reproducir el sonido:', error);
    }
  }
  const handleDone = async (item) => {
    try {
      // Llama a la función markVoiceNoteAsCompleted para marcar la nota de voz como completada
      await markVoiceNoteAsCompleted(item[0], item);
      console.log('Nota de voz marcada como completada:', item);
      const updatedVoiceNotes = voiceNotes.filter((note) => note[0] !== item[0]);
      setVoiceNotes(updatedVoiceNotes);
      Alert.alert('Pendiente Realizado', 'Podras ver los pendientes realizados en Realizadas')
    } catch (error) {
      console.error('Error al marcar la nota de voz como completada:', error);
    }
  };

  const renderVoiceNote = ({ item }) => (
    <TouchableOpacity onPress={() => playSound(item[1])}>
      <View style={styles.voiceNoteContainer}>
        <Feather name="play" size={24} color='rgba(66, 155, 255, 0.66)' />
        <View style={styles.voiceNoteInfo}>
          <Text style={styles.voiceNoteName}>{item[0]}</Text>
          <Text style={styles.voiceNoteDate}>{item[2]}</Text>
          <DoneButton onPress={() => handleDone(item)} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recordatorios por cumplir</Text>
      <FlatList
        data={voiceNotes}
        renderItem={renderVoiceNote}
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  voiceNoteInfo: {
    marginLeft: 10,
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