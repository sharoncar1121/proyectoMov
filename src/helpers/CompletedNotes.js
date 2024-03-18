import AsyncStorage from '@react-native-async-storage/async-storage';

// Función para marcar una nota de voz como completada y guardarla en AsyncStorage
export const markVoiceNoteAsCompleted = async (name, data) => {
  try {
    // Guarda la nota de voz como completada en AsyncStorage
    const jsonData = JSON.stringify(data); // Convierte el objeto a una cadena JSON
    await AsyncStorage.setItem(name, jsonData);
    console.log('Nota de voz marcada como completada:', data);
  } catch (error) {
    console.error('Error al marcar la nota de voz como completada:', error);
  }
};

// Función para obtener todas las notas de voz marcadas como completadas desde AsyncStorage
export const getCompletedVoiceNotes = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const completedVoiceNotes = await Promise.all(keys.map(async key => {
      
      const jsonData = await AsyncStorage.getItem(key);
      const data = JSON.parse(jsonData); // Analiza la cadena JSON para obtener el objeto
      return data;
    }));
    return completedVoiceNotes;
  } catch (error) {
    console.error('Error al obtener las notas de voz completadas:', error);
    return [];
  }
};