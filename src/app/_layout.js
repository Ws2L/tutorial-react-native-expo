import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#008cffff',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false
            }}>
                
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({color}) => <MaterialIcons name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre",
                    tabBarIcon: ({color}) => <Entypo name="info" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: "Contato",
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="contacts" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({color}) => <Ionicons name="person-circle-sharp" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}