import {View, Text, StyleSheet} from 'react-native'

export default function Card() {
  return (
    <View style={styles.card}>
        <View style={styles.image}></View>
        <View style={styles.text}>
        <Text style={styles.title}>BOLO DE CENOURA COM COBERTURA</Text>
        <Text style={styles.p}>A sobremesa brasileiríssima que é uma verdadeira alegria para o paladar, onde cada pedaço é um suspiro.
        Uma maravilha culinária que você não pode deixar de experimentar!
        Já pensou no que uma sobremesa dessas pode causar na sua mesa?
        Só alegria!
        </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
    width: "100%",
    height: 150,
    backgroundColor: "#535353ff",
    padding: 10,
    flexDirection: "row",
    marginBottom: 30
  },

  image: {
    width: 80,
    height: 80,
    backgroundColor: "white",
  },

  text: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "column"
  },

  title: {
    fontWeight: "Bold",
    color: "white"
  },

  p: {
    color: "white",
    textAlign: "justify"
  },
})