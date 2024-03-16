import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { clearAllData } from '../helpers/SaveAndGet';

export function Settings({navigation}) {
  const handleLogout = () => {
    Alert.alert(
      '¿Está seguro que desea salir de la sesión?',
      'Esta acción cerrará la sesión actual, y borrara datos almacenados',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Salir',
          onPress: async () => {
            await clearAllData(); 
            navigation.navigate('Login');
          },
        }
      ]
    );
  };

  const handlePermissions = () => {
    
  };

  const handlePrivacy = () => {
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePermissions}>
        <Feather name="shield" size={24} color="green" />
        <Text style={styles.buttonText}>Permisos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlePrivacy}>
        <Feather name="lock" size={24} color="blue" />
        <Text style={styles.buttonText}>Privacidad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Feather name="log-out" size={24} color="red" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },

  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});