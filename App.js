import { View, Text, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Card from './src/components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    <View style={styles.content}>
      <Card />
      <Card />
      <Card />
    </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  
  content: {
    flex: 8,
    width: "100%",
    backgroundColor: "#ddddddff",
    padding: 10,
    
  },
})