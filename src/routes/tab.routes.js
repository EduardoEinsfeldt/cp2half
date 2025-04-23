import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screen/HomeScreen';
import Dev from '../screen/DevScreen';
import Form from '../screen/FormScreen';
import Info from '../screen/InfoScreen';
import Links from '../screen/LinkScreen';

const Tab = createBottomTabNavigator()

export default function TabRoutes({ route }) {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            initialRouteName={route?.params?.initialRouteName || "tabHome"}
        >
            <Tab.Screen name='tabHome' component={Home}
                options={{
                    tabBarIcon: () => <Feather name='home' size={20} />,
                    tabBarLabel: "Início", tabBarActiveBackgroundColor: '#1e1e1e', tabBarInactiveBackgroundColor: '#1e1e1e', tabBarActiveTintColor: '#81c784', tabBarInactiveTintColor: '#888',
                }}
            />
            <Tab.Screen name='tabDev' component={Dev}
                options={{
                    tabBarIcon: () => <Feather name='meh' size={20} />,
                    tabBarLabel: "Devs", tabBarActiveBackgroundColor: '#1e1e1e', tabBarInactiveBackgroundColor: '#1e1e1e', tabBarActiveTintColor: '#81c784', tabBarInactiveTintColor: '#888'
                }}
            />
            <Tab.Screen name='tabForms' component={Form}
                options={{
                    tabBarIcon: () => <Feather name='clipboard' size={20} />,
                    tabBarLabel: "Formulario", tabBarActiveBackgroundColor: '#1e1e1e', tabBarInactiveBackgroundColor: '#1e1e1e', tabBarActiveTintColor: '#81c784', tabBarInactiveTintColor: '#888'
                }}
            />
            <Tab.Screen name='tabInfo' component={Info}
                options={{
                    tabBarIcon: () => <Feather name='info' size={20} />,
                    tabBarLabel: "Info", tabBarActiveBackgroundColor: '#1e1e1e', tabBarInactiveBackgroundColor: '#1e1e1e', tabBarActiveTintColor: '#81c784', tabBarInactiveTintColor: '#888'
                }}
            />
            <Tab.Screen name='tabLinks' component={Links}
                options={{
                    tabBarIcon: () => <Feather name='link' size={20} />,
                    tabBarLabel: "Links", tabBarActiveBackgroundColor: '#1e1e1e', tabBarInactiveBackgroundColor: '#1e1e1e', tabBarActiveTintColor: '#81c784', tabBarInactiveTintColor: '#888'
                }}
            />
        </Tab.Navigator>
    )
}