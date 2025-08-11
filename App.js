import { View, Text, StyleSheet } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Logo</Text>
        <View style={styles.menu}></View>
      </View>

      <View style={styles.content}>

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

      </View>
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
  
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#79ff79ff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  
  content: {
    flex: 8,
    width: "100%",
    backgroundColor: "#fff7c6ff",
    padding: 10,
    
  },

  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffffff"
  },

  card: {
    width: "100%",
    height: 200,
    backgroundColor: "#ffd6d6ff",
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
    //width: "100%"
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