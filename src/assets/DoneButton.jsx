import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function DoneButton({ onPress }) {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked); 
    onPress(); 
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.container2}>
        <Feather
          name={isChecked ? "check-circle" : "circle"}
          size={22}
          color={isChecked ? "blue" : 'rgba(66, 155, 255, 0.66)'} 
          style={[styles.checkbox, { backgroundColor: isChecked ? 'rgba(66, 155, 255, 0.66)' : "transparent" }]} 
        />
        <Text style={styles.label}>Realizada</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 200, 
    marginTop: -45
  },

  checkbox: {
    marginRight: 8, 
    borderRadius: 16,
    padding: 3,
  },
  label: {
    fontSize: 16,
    color: 'rgba(66, 155, 255, 0.66)',
  },
});