import {View, Text, StyleSheet} from 'react-native'
import {Image} from 'expo-image'
import { Entypo } from '@expo/vector-icons'

function Header({image}) {
  return (
    <View style={styles.header}>
        <View style={styles.itens}>
          <Image style={styles.image}
          source={require('../../assets/logo.svg')}
          />
          <Text style={styles.name}>MovieNow</Text>
        </View>
        <Entypo name="menu" size={45} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000000ff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },

  itens: {
    flexDirection: "row",
    alignItems: "center"
  },

  image: {
    width: 45,
    height: 45,
  },

  name: {
    color: "white",
    paddingLeft: 20,
    fontFamily: "Poppins, sans-serif",
    fontSize: 20,
    fontWeight: "bold"
  },

  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffffff"
  }
})

export default Header