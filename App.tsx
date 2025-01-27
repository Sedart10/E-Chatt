import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Chats } from './components/Chats';
import ExampleChat from './components/ExampleChat';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Chats">
                <Stack.Screen name="Chats" component={Chats} />
                <Stack.Screen name="ExampleChat" component={ExampleChat} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}