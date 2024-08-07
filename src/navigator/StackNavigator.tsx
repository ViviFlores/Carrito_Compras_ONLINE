import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor:PRIMARY_COLOR
                }
            }}>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}