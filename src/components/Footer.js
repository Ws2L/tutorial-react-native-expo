import {View, Text, StyleSheet} from 'react-native'

function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.ftext}>©Todos os direitos reservados - Weslley Souza</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000000ff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  ftext:{
    color: "#FFF",
    fontSize: 15
  }
})

export default Footer