import {View, Text, StyleSheet} from 'react-native'
import {Image} from 'expo-image'

function Card({title, desc, img}) {

  //const {titulo, desc} = props

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={img} />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.p}>{desc}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
    height: 150,
    backgroundColor: "rgba(224, 224, 224, 1)",
    padding: 10,
    flexDirection: "row",
    marginBottom: 30,
    overflow: "hidden",
    paddingBottom: 10,
  },

  image: {
    width: 90,
    height: 130,
  },

  text: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    overflow: "hidden",
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