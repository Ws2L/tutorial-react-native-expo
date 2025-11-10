import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function profile() {

    const router = useRouter()

    const handleLogout = async () => {
        await AsyncStorage.removeItem('logado')
        router.replace('/login')
    }

    return (
        <View style={styles.container}>
            <Text>Página do usuario</Text>
            <Button 
            title='Home'
            onPress={() => router.replace('/home')}
            />

            <Button 
            title='Sobre Nós'
            onPress={() => router.push('/about')}
            />

            <Button 
            title='Logout'
            onPress={handleLogout}
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