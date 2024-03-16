import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from '../../styles/styles';

const USUARIO = 'usuario'
const CONTRASENA = '1234'

export const Login = ({navigation}) => {
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(user === USUARIO && password === CONTRASENA){
        Alert.alert(`Inicio de sesion`, `Bienvenido ${user}`)
        navigation.navigate('Nueva Voice')
    }else{
        Alert.alert('Error', `Usuario o contrasenia incorrectos`)
    }
  };

  return (
    <View style={styles.containerlog}>
    <View style={[styles.icon, { marginTop: 20 }]}>
        <Icon name='user-circle-o' color='rgba(66, 155, 255, 0.66)' size={100} style={styles.icon} />
      </View>
      <Text style={styles.labelText}>Usuario:</Text>
      <TextInput
        style={[styles.input, { marginTop: 30 }]}
        onChangeText={text => setUsername(text)}
        value={user}
        placeholder="Ej. Juan"
        autoCapitalize="none"
      />
      <Text style={styles.labelTextPass}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Ingrese su Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.buttonlog} onPress={handleLogin}>
        <Text style={styles.buttonTextlog}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};