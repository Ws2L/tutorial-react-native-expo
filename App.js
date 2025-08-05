import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}> </View>
      <Text style={styles.tituloPrincipal}>Titulo Principal</Text>
      <Text style={styles.subTitulo}>Subtitulo</Text>
      <Text>Paragráfo</Text>
      <Text style={styles.saibaMais}>Saiba Mais</Text>
      <View style={styles.box2}> </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  tituloPrincipal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20
  },

  subTitulo: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginVertical: 20
  },

  saibaMais: {
    fontSize: 14,
    fontWeight: '#464646'
  },

  box1: {
    width: '100%',
    height: 100,
    backgroundColor: 'red'
  },

  box2: {
    width: '100%',
    height: 100,
    backgroundColor: 'black'
  },

  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
});