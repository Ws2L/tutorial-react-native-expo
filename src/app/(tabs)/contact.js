import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { useState, useEffect } from 'react'
import CardUser from '../../components/CardUser'
import { useUserStore } from '../../stores/useUserStore'

export default function Contact() {

    const router = useRouter()
    const { users, setUsers } = useUserStore()
    
    useEffect(() => {
        const listUsers = async () => {
            const response = await fetch("http://localhost:3333/profile")
            if(response.ok){
                console.log("Lista carregada com sucesso")
                const data = await response.json()
                console.log(data.profiles)
                setUsers(data.profiles)
            } else {
                console.log("Erro ao carregar lista")
            }
        }

        listUsers()
    } , [])

    return (

        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({item}) => <CardUser 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    avatar={item.avatar}
                />}
                keyExtractor={item => item.id}
            />
        </View>
        /*
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Página de Contato</Text>
            {users.map((user) => (
                <CardUser 
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    avatar={user.avatar}
                    setUsers={setUsers}
                />
            ))}
        </ScrollView>*/
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    title: {
        position: 'absolute',
        top: 50,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    }
})