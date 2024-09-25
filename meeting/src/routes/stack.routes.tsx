import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ListScreen } from "../screens/ListScreen";

const Stack = createNativeStackNavigator();

export function StackRoutes(){   

    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}} 
            />
            <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='ListScreen'
                component={ListScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}