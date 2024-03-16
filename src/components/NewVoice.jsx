import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Text} from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../styles/styles';
import { NameModal } from '../assets/Modal';

export const NewVoice = () => {
  const [recording, setRecording] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [sound, setSound] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const startRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access microphone denied');
        return;
      }
      setIsRecording(true);
      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await newRecording.startAsync();
      setRecording(newRecording);
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log('Recording stopped and stored at', uri);
      setSound(uri);
    } catch (error) {
      console.error('Failed to stop recording', error);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const playSound = async () => {
    try {
      const { sound: soundObject } = await Audio.Sound.createAsync({ uri: sound });
      await soundObject.playAsync();
    } catch (error) {
      console.error('Failed to play sound', error);
    }
  };

  const saveVoice = () => {
      setModalVisible(true);
    };
  
  const deleteVoice = () => {
      if (sound) {
        FileSystem.deleteAsync(sound)
          .then(() => {
            console.log('File deleted');
            setSound(null); // Resetear el estado del sonido
          })
          .catch(error => console.error('Error deleting file:', error));
      }
    };

  const closeModal = () => {
      setModalVisible(false);
      setSound(null);
    };
  
  return (
    <View style={styles.container}>
      {!sound ? (
        <TouchableOpacity onPress={toggleRecording}>
          <Feather name={isRecording ? "pause-circle" : "mic"} size={100} color='rgba(66, 155, 255, 0.66)' style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={saveVoice}>
            <Feather name="save" size={50} color="gray" style={styles.icon} />
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={playSound}>
            <Feather name="play-circle" size={100} style={styles.playButton} color='rgba(66, 155, 255, 0.66)'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteVoice}>
            <Feather name="trash-2" size={50} color="gray" style={styles.iconTrash} />
            <Text style={styles.buttonText}>Volver a grabar</Text>
          </TouchableOpacity>
        </View>
      )}
      <NameModal visible={modalVisible} onSave={closeModal} onClose={closeModal} uri={sound} />
    </View>
  );
};
