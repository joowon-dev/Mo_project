import React, { useState } from "react";
import { View, StyleSheet, Button, Text ,TextInput} from "react-native";
import AddList from "../components/Icon/AddList";
import {db} from "../firebaseConfig"
const Contact = () => {
   const [title, setTitle] = useState("");
  const [color, setColor] = useState("#0080ff");
const [icon, setIcon] = useState("calendar");
  const handleTitleChange = (text) => {
    setTitle(text);
  };
    const handleiconChange = (text) => {
    setIcon(text);
  };
    const handleColorChange = (text) => {
    setColor(text);
  };

  const handleAddList = async () => {
    try {
      // Firestore에 사용자 추가
      await db.collection('list').doc().set({
        title,
        color,
        icon,
      });
      setIcon('');
      setColor('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.center}>
      <View style={styles.card1}>
        <AddList color={color} icon={icon}/>
         <TextInput
          style={styles.input}
          placeholder="목록이름"
          onChangeText={handleTitleChange}
          value={title}
        />
      </View>
      <View style={styles.card2}>
        <TextInput
          style={styles.input}
          placeholder="아이콘"
          onChangeText={handleiconChange}
          value={icon}
        />
        <TextInput
          style={styles.input}
          placeholder="색깔"
          onChangeText={handleColorChange}
          value={color}
        />
        <Button title="목록 추가" onPress={handleAddList} />
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#000000"
  },
  card1: {
    width:  "18.5rem",
    height:  "10rem",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#242424"
  },
  card2: {
    width:  "18.5rem",
    height:  "10rem",
    marginTop: "0.5rem",
    borderRadius: 10,
    backgroundColor: "#242424",
  },
  input: {
    backgroundColor: "#7f7f7f",
    width: "90%",
    height: 40,
    marginTop: 1,
    marginBottom: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "white",
  },
  multilineInput: {
    height: 80,
    paddingVertical: 10
  }
});


export default Contact;