import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveVoiceNote = async (name, data) => {
  try {
    const jsonData = JSON.stringify(data); // Convertir el objeto a una cadena JSON
    await AsyncStorage.setItem(name, jsonData);
    console.log('Fecha de la voz guardada:', data.date);
  } catch (error) {
    console.error('Error al guardar la voz:', error);
  }
};


export const getArchivedVoices = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const voiceNotes = await Promise.all(keys.map(async key => {
      const jsonData = await AsyncStorage.getItem(key);
      let data = null;
      try {
        data = JSON.parse(jsonData); // Intentar analizar la cadena JSON para obtener el objeto
      } catch (error) {
        console.error('Error al analizar datos JSON:', error);
      }
      if (data && typeof data === 'object') {
        return [key, data.uri, data.date]; // Retornar los datos desglosados si se pudo analizar correctamente
      } else {
        return null; // Si no se pudo analizar, retornar null
      }
    }));
    // Filtrar elementos nulos (en caso de que haya datos no válidos)
    return voiceNotes.filter(note => note !== null);
  } catch (error) {
    console.error('Error al obtener la voz:', error);
    return [];
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Todos los datos han sido eliminados exitosamente');
  } catch (error) {
    console.error('Error al eliminar los datos:', error);
  }
};

