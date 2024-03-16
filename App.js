
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Login } from './src/components/Login';
import { Done} from './src/components/Done';
import { NewVoice } from './src/components/NewVoice';
import { Pendings } from './src/components/Pendings';
import { Settings } from './src/components/Settings';


const Tab =  createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if(route.name === 'Login'){
            iconName = focused? 'log-in' : 'log-in-outline'
          }else if(route.name === 'Nueva Voice'){
            iconName = focused? 'add-circle' : 'add-circle-outline'
          }else if(route.name === 'Archivo'){
            iconName = focused? 'folder-open' : 'folder-outline'
          }else if(route.name === 'Realizadas'){
            iconName = focused? 'checkmark-done-circle-sharp' : 'checkmark-done-circle-outline'
          }else if(route.name === 'Configuracion'){
            iconName = focused? 'settings' : 'settings-outline'
          }
          return <Icon name={iconName} color={color} size={size}></Icon>
        }
        })}
        > 
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Nueva Voice" component={NewVoice} />
        <Tab.Screen name="Archivo" component={Pendings} />
        <Tab.Screen name="Realizadas" component={Done} />
        <Tab.Screen name="Configuracion" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

