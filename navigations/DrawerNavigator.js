import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator,CalendarStackNavigator,SettingStackNavigator } from "./StackNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent"
import BottomTabNavigator from "./TabNavigator";
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
        <Drawer.Navigator 
        drawerPosition = "right"
        drawerStyle = {{
          backgroundColor : "#2D3032",
          width : 200
        }}
        
        drawerContentOptions = {{
          activeBackgroundColor:'#7f7f7f',
                  labelStyle: {
          color: '#ffffff'
        }
        }}
      drawerContent = {(props)=><CustomDrawerContent{...props}/>}
      >
      <Drawer.Screen name="Home" component={BottomTabNavigator}  options={{
          drawerIcon: () => (
            <Ionicons name="home" size={20} color="white" />
          )
        }}/>
      <Drawer.Screen name="일정보기" component={CalendarStackNavigator} options={{
          drawerIcon: () => (
            <Ionicons name="calendar" size={20} color="white" />
          )}}/>
      <Drawer.Screen name="설정" component={SettingStackNavigator} options={{
          drawerIcon: () => (
            <Ionicons name="settings" size={20} color="white" />
          )}}/>
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;