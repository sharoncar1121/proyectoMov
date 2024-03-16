import React, { useState } from 'react';
import { View, Modal, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import { styles } from '../../styles/styles';
import { saveVoiceNote } from '../helpers/SaveAndGet';

export const NameModal = ({ visible, onSave, onClose, uri }) => {
  const [noteName, setNoteName] = useState('');

  const handleSave = () => {
    const date = new Date().toLocaleString();
    if (noteName != '') {
      const data = { uri, noteName, date }; 
      saveVoiceNote(noteName, data); 
      console.log('Se manda a guardar la voz con fecha');
      Alert.alert('¡Almacenada con éxito!', 'Su nota de voz se guardó correctamente en archivos pendientes');
      onClose(true);
    } else {
      Alert.alert('Error', 'Debe ingresar un nombre para su nota');
    }
  };
  

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Guardar nota de voz</Text>
          <TextInput
            style={styles.inputm}
            placeholder="Nombre de la voice note"
            value={noteName}
            onChangeText={setNoteName}
          />
          <View style={styles.buttonContainerm}>
          <TouchableOpacity style={[styles.buttonm, styles.buttonLeftm]}onPress={handleSave}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonm, styles.buttonRightm]} onPress={onClose}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
