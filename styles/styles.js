import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      //estilos login
    containerlog: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },

      input: {
        width: '80%',
        height: 50,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
      },
      labelText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: -30,
        color: 'rgba(66, 155, 255, 0.66)',
        marginRight: 240
      },
      labelTextPass: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:5,
        color: 'rgba(66, 155, 255, 0.66)',
        marginRight: 220
      },
      buttonlog: {
        width: '80%',
        height: 50,
        backgroundColor: '#007bff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonTextlog: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },

      icon :{
        marginTop: 20
      },

      // estilos para componente new voice
      containerv: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconv: {
        marginBottom: 20,
      },
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 100,
      },

      playButton:{
        alignSelf: 'center',
        marginBottom: 300,
        marginLeft: 50
      },
        // estilos modal 
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 1, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
      },
      inputm: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20,
        width: '100%',
        borderRadius: 5,
      },
      buttonm: {
        backgroundColor: 'rgba(66, 155, 255, 0.66)',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
      },
      buttonTextm: {
        color: 'white',
        fontWeight: 'bold',
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'normal',
        marginBottom: 20,
        textAlign: 'center',
      },
      buttonContainerm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
      },
      buttonLeftm: {
        marginRight: 10, 
      },
      buttonRightm: {
        marginLeft: 10, 
      },
      buttonText: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginTop: 5,
      },
      iconTrash :{
        marginTop: 20,
        marginLeft:40
      },
  });

  export {styles}