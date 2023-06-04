import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View,TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import List from "../screens/List";
import AddList from "../screens/AddList";
import Calendar from "../screens/CalendarView"
import Setting from "../screens/Setting"
import Listtodo from "../screens/Listtodo"
import Today from "../screens/Home/Today";
import Schedule from "../screens/Home/Schedule";
import All from "../screens/Home/All";
import Complete from "../screens/Home/Complete";
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#000000",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const homecomponentoption = {
   headerLeft: ({onPress}) => (
                  <TouchableOpacity onPress={onPress} style={{flexDirection: 'row', justifyContent: "center",alignItems: 'center'}}>
                      <Ionicons name="ios-chevron-back-outline" size={25} color="#0080ff" style={{marginLeft:10}}/>
                      <Text style={{color:'#0080ff'}}>목록</Text>
                   </TouchableOpacity>                 
                 ),
    headerTitleAlign: 'center',
    headerRight: ({onPress}) => (
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="ios-ellipsis-horizontal-circle" size={20} color="#0080ff" style={{marginLeft:10}}/>
      </TouchableOpacity>
    ),
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="미리알림" component={Home} options={{ headerTitle:() => (
            <View style={{flexDirection: 'row',alignItems:"center"}}>
              <Ionicons name={"ios-home"} size={20} color="white" />
              <Text style={{color:'white',marginLeft: 5}}>미리알림</Text>
            </View>
    )}}/>
      <Stack.Screen name="오늘" component={Today} options={homecomponentoption} />
      <Stack.Screen name="예정" component={Schedule} options={homecomponentoption} />
      <Stack.Screen name="전체" component={All}  options={homecomponentoption}/>
      <Stack.Screen name="완료됨" component={Complete}  options={homecomponentoption}/>
    </Stack.Navigator>
  );
};
const ListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="나의 목록" component={List}   options={{
                headerLeft: ({onPress}) => (
                   <TouchableOpacity onPress={onPress}>
                     <Ionicons name="list-circle-sharp" size={20} color="#0080ff" style={{marginLeft:10}}/>
                   </TouchableOpacity>
                 ),
                headerTitleAlign: 'center',
                headerTitle:() => (
                  <View style={{flexDirection: 'row',alignItems:"center"}}>
                     <Text style={{color:'white'}}>나의목록</Text>
                  </View>
    ),
  }}/>
  <Stack.Screen name="목록" component={Listtodo} options={homecomponentoption} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="새로운 미리 알림" component={Contact}   options={{
    headerLeft: ({onPress}) => (
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="add-circle-sharp" size={20} color="#0080ff" style={{marginLeft:10}}/>
      </TouchableOpacity>
    ),
    headerTitle:() => (
            <View style={{alignItems:"center"}}>
              <Text style={{color:'white'}}>새로운미리알림</Text>
     <        /View>
    ),
    headerRight: () => (
      <View>
        <Text Text style={{color:'#0080ff'}}>추가     </Text>
      </View>
    ),
  }}/>
    </Stack.Navigator>
  );
};
const AddListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="새로운 목록" component={AddList}   options={{
    headerLeft: ({onPress}) => (
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="ios-add-outline" size={20} color="#0080ff" style={{marginLeft:10}}/>
      </TouchableOpacity>
    ),
     headerTitleAlign: 'center',
    headerTitle:() => (
            <View style={{flexDirection: 'row',alignItems:"center"}}>
              <Text style={{color:'white'}}>새로운목록</Text>
     <        /View>
    ),
    headerRight: ({onPress}) => (
      <TouchableOpacity onPress={onPress}>
        <Text Text style={{color:'#0080ff'}}>완료     </Text>
      </TouchableOpacity>
    ),
  }}/>
    </Stack.Navigator>
  );
};
const CalendarStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="달력" component={Calendar}   options={{
    headerLeft: ({onPress}) => (
      <TouchableOpacity onPress={onPress}>
        <Text style={{color:'#0080ff'}}>   취소</Text>
      </TouchableOpacity>
    ),
    headerTitleAlign: 'center',
    headerTitle:() => (
            <View style={{flexDirection: 'row',alignItems:"center"}}>
              <Ionicons name={"ios-calendar-outline"} size={20} color="white" />
              <Text style={{color:'white',marginLeft: 5}}>달력</Text>
            </View>
    ),
    headerRight: () => (
      <View>
        <Text Text style={{color:'#0080ff'}}>완료     </Text>
      </View>
    ),
  }}/>
    </Stack.Navigator>
  );
};
const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="설정" component={Setting}   options={{
    headerLeft: ({onPress}) => (
      <TouchableOpacity onPress={onPress}>
        <Text style={{color:'#0080ff'}}>   취소</Text>
      </TouchableOpacity>
    ),
    headerTitleAlign: 'center',
    headerTitle:() => (
            <View style={{flexDirection: 'row',alignItems:"center"}}>
            <Ionicons name={"ios-settings-outline"} size={20} color="white" />
            <Text style={{color:'white',marginLeft: 5 }}>설정</Text>
            </View>
    ),
    headerRight: () => (
      <View>
        <Text Text style={{color:'#0080ff'}}>완료     </Text>
      </View>
    ),
  }}/>
    </Stack.Navigator>
  );
};


export { MainStackNavigator, ContactStackNavigator, ListStackNavigator, AddListStackNavigator,    CalendarStackNavigator,SettingStackNavigator};