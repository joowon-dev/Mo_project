import React from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        width:  150,
        height:  70,
        borderRadius: 10,
        backgroundColor: '#2D3032',
        padding: 10,
        flexDirection: 'row',
      }}
      onPressIn={()=>props.handlePressIn()}
    >
      <View
        style={{
          width:  30,
          height:  30,
          borderRadius: 100,
          backgroundColor: props.color,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}
      >
        <Feather name={props.icon} size={20} color="white" />

      </View>
      <View style={{ position: 'absolute', top: 10, right: 15 }}>
        <Text style={{ fontSize: 24, fontFamily: 'Arial', color: 'white'}}>{props.num}</Text>
      </View>
          <View style={{ position: 'absolute', top: 45, left: 10}}>
        <Text style={{ fontSize: 16, fontFamily: 'Arial', color: '#939393'}}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};


export default CustomButton;