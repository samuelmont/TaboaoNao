import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Report from '../pages/Reports/Reports';
import Principal from '../pages/Principal/Principal';
import Register from '../pages/Register/Register';
import Welcome from '../pages/Welcome/Welcome';
import SignIn from '../pages/Signin/SignIn';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
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
                component={Report.Potholes}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Sinalizations"
                component={Report.Sinalizations}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Accessibilities"
                component={Report.Accessibilities}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Illumination"
                component={Report.Illumination}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Others"
                component={Report.Others}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}