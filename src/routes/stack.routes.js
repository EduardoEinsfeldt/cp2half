import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen";
import Dev from "../screens/DevScreen";
import Info from "../screens/InfoScreen";
import Form from "../screens/FormScreen";
import Links from "../screens/LinkScreen";

const Stack = createNativeStackNavigator()

export default function StackRoutes() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Screen name="stackHome" component={Home} />
                <Stack.Screen name="stackDev" component={Dev} />
                <Stack.Screen name='stackInfo' component={Info} />
                <Stack.Screen name='stackForm' component={Form} />
                <Stack.Screen name='stackLinks' component={Links} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}