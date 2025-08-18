import {View, Text, StyleSheet} from 'react-native'

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.ftext}>@ Weslley Souza</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    width: "100%",
    backgroundColor: "#000000ff",
    justifyContent: 'center',
    alignItems: 'center',
    position: ''
  },
  ftext:{
    color: "#FFF"
  }
})