import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from "../components/Icon/Tabbar"
import { MainStackNavigator, ContactStackNavigator , ListStackNavigator, AddListStackNavigator} from './StackNavigator'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="홈"
        tabBarOptions={{
          activeBackgroundColor:'#000000',
          activeTintColor:"#0080ff",
          inactiveTintColor:"#0080ff",
          inactiveBackgroundColor:'#000000',
          style:{
            backgroundColor:'#000000',
          },
          labelPosition: 'below-icon'
        }}

        screenOptions = {({route})=>({
          tabBarLabel:route.name,
          tabBarIcon:({focused})=>(
            TabBarIcon(focused,route.name)
          )
        })}
      >
      <Tab.Screen name="새로운 미리 알림" component={ContactStackNavigator} />
      <Tab.Screen name="홈" component={MainStackNavigator}/>
      <Tab.Screen name="목록" component={ListStackNavigator} />
      <Tab.Screen name="목록추가" component={AddListStackNavigator} />
    </Tab.Navigator>
  );
}


export default BottomTabNavigator