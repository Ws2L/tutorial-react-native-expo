import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function profile() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text>Página do usuario</Text>
            <Button 
            title='Home'
            onPress={() => router.replace('/')}
            />

            <Button 
            title='Sobre Nós'
            onPress={() => router.push('/about')}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})