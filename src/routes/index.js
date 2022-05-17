import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Potholes, Sinalizations, Access, Ilumination, Others } from '../pages/Reports/Reports';
import Principal from '../pages/Principal';
import Register from '../pages/Register';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Potholes"
                component={Potholes}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Sinalizations"
                component={Sinalizations}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Access"
                component={Access}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Ilumination"
                component={Ilumination}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Others"
                component={Others}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}