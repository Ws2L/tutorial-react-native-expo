import {View, Text, StyleSheet} from 'react-native'
import {Image} from 'expo-image'

function Card({title, desc, img}) {

  //const {titulo, desc} = props

  return (

    <View style={styles.card}>
      <Image style={styles.image} source={img} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.p}>{desc}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
    card: {
    width: "100%",
    height: 150,
    backgroundColor: "#ddddddff",
    padding: 10,
    flexDirection: "row",
    marginBottom: 30
  },

  image: {
    width: 90,
    height: 130,
  },

  text: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "center"
  },

  title: {
    fontWeight: "Bold",
    color: "black",
    fontSize: 20,
    fontFamily: "Poppins, sans-serif",
  },

  p: {
    color: "black",
    textAlign: "justify",
    paddingVertical: 10,
    fontSize: 17
  },
})

export default Card