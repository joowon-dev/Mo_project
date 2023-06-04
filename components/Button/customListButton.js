import React from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 

const CustomListButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        width:  300,
        height:  51,
        borderRadius: 10,
        backgroundColor: '#2D3032',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1 
      }}
      onPressIn={()=>props.handlePressIn()}
    >
      <View
        style={{
          width:  33,
          height:  33,
          borderRadius: 100,
          backgroundColor: props.color,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}
      >
        <Feather name={props.icon} size={20} color="white" />

      </View>
      <View style={{ position: 'absolute', right: 15 }}>
        <Text style={{ fontSize: 17, fontFamily: 'Arial', color: "#7f7f7f"}}>{props.num}</Text>
      </View>
          <View style={{ position: 'absolute', left: 53}} >
        <Text style={{ fontSize: 15, fontFamily: 'Arial', color: 'white'}}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};


export default CustomListButton;