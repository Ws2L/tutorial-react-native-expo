import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <Link href='contact'><Text>Contato</Text></Link>
        <Link href='about'><Text>Sobre Nós</Text></Link>
      </View>
      <View style={styles.content}>

        <Card
        title="As Aventuras de tintim"
        desc="A aventura começa assim que Tintim compra a miniatura de um barco. Sem saber o segredo do objeto, ele e seu cachorro são sequestrados. Presos em um barco, conseguem escapar junto com o capitão e, aos poucos, vão decifrando todos os mistérios." 
        img="https://cdn.iset.io/assets/52438/produtos/39914/aadt.jpg"
        />

        <Card
        title="Carros 2"
        desc="O astro das corridas, Relâmpago McQueen, e o carro-guincho, Mate, viajam para disputar o primeiro Grand Prix Mundial, que irá revelar o carro mais veloz do planeta. Nessa jornada imperdível, Mate se envolve com um grupo de espionagem e vive grandes aventuras com seus amigos." img="https://upload.wikimedia.org/wikipedia/pt/7/7e/Carros_2_P%C3%B4ster.jpg"
        />

        <Card
        title="Sonic"
        desc="O porco-espinho Sonic é teletransportado para a Terra. Após causar uma pane elétrica em parte dos Estados Unidos, ele precisa escapar do maligno cientista Dr. Robotnik."
        img="https://m.media-amazon.com/images/S/pv-target-images/fc835c3b3882f114c7c5efdfbb2790dd6050235ce9397913bd21e22c68553c3c.jpg"
        />

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
    backgroundColor: "#eeeeeeff",
    padding: 10,
  },
})