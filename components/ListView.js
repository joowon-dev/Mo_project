import {useState} from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CustomListButton = (props) => {
  return (
    <View
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
    >
        <BouncyCheckbox
          size={25}
          fillColor="#FFFFFF"
          unfillColor="#FFFFFF"
          text={props.title}
          iconStyle={{ borderColor: "#7f7f7f" }}
          textStyle={{ color:"white" }}
          onPress = {props.onPress}
        />

      <View style={{ position: 'absolute', right: 15 }}>
        <Text style={{ fontSize: 17, fontFamily: 'Arial', color: "#7f7f7f"}}>{props.num}</Text>
      </View>
          <View style={{ position: 'absolute', left: 53}} >
        <Text style={{ fontSize: 15, fontFamily: 'Arial', color: 'white'}}>{props.name}</Text>
      </View>
    </View>
  );
};


export default CustomListButton;