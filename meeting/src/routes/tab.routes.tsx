import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons"
import { Home } from "../screens/Home";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ListScreen } from "../screens/ListScreen";
import { Platform } from "react-native";

const {Navigator, Screen} = createBottomTabNavigator()

export function TabRoutes(){  

    const theme = useTheme()

    return (   
       <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.COLORS.PRIMARY,
            tabBarInactiveTintColor: theme.COLORS.DISABLED,
            tabBarLabelPosition: "beside-icon",
            tabBarStyle:{
                height: 68,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            }
        
       }}>
            <Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarStyle: {display: 'none'},
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                        />)
                }}
            />
            <Screen 
                name="RegisterScreen" 
                component={RegisterScreen}
                options={{
                    tabBarLabel: "Cadastrar",
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons
                            name="library-add"
                            size={size}
                            color={color}
                        />)
                }}
            />
            <Screen 
                name="ListScreen" 
                component={ListScreen}
                options={{
                    tabBarLabel: "Fornecedores",
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons
                            name="list"
                            size={size}
                            color={color}
                        />)
                }}
            />
            
       </Navigator>       
    )
}