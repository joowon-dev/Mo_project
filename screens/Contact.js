import React from 'react';
import { Button, View, StyleSheet, Text, TextInput,Picker} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {db} from "../firebaseConfig"

const Contact = () => {
  const [title, setTitle] = useState('');
   const [selectedList, setSelectedList] = useState(null);
  const [list, setList] = useState([]);
  const [memo, setMemo] = useState('');
   const [datest, setDate] = useState('');
   const complete = 0 
   const readfromDB = async () => {
    try {
      const data = await db.collection("list");
      let tempArray = [];

      data.get().then(snap => {
        snap.forEach((doc) => {
          tempArray.push({ ...doc.data(), documentid: doc.id});
        })
        setList(tempArray);
        console.log(tempArray)
      })
    } catch(error) {
      console.log(error.message);
    }
  }
 const onFocused = useIsFocused();
  useEffect(() => {
    readfromDB()
  }, [onFocused]);
  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleMemoChange = (text) => {
    setMemo(text);
    console.log(memo);
  };
  const handleDateChange = (text) => {
    
    setDate(text);

  };
   const handleListChange = (itemValue) => {
    setSelectedList(itemValue);
  };
  const handleAddUser = async () => {
    try {
      const dateParts = datest.split("-");
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1; // Month is zero-based in JavaScript Date object
      const day = parseInt(dateParts[2]);
      const date = new Date(year, month, day);
      await db.collection('user').doc().set({
        title,
        memo,
        date,
        selectedList,
        complete,
        createdAt: new Date(),
      });
      setTitle('');
      setMemo('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.center}>
      <TextInput
        style={styles.input}
        placeholder="제목"
        onChangeText={handleTitleChange}
        value={title}
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="메모"
        onChangeText={handleMemoChange}
        value={memo}
        multiline={true}
      />
      <TextInput
        style={styles.input}
        placeholder="날짜 입력"
        onChangeText={handleDateChange}
        value={datest}
      />
      <Picker
        selectedValue={selectedList}
        onValueChange={handleListChange}
        style={styles.picker}
      >
        <Picker.Item label="Select a List" value={null} />
        {list.map((item, idx) => (
          <Picker.Item
            key={item.title}
            label={item.title}
          />
        ))}
      </Picker>
      <Button title="일정추가" onPress={handleAddUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#000000',
  },
  input: {
    backgroundColor: '#2D3032',
    width: '90%',
    height: 40,
    marginTop: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'white',
  },
  multilineInput: {
    height: 80,
    paddingVertical: 10,
  },
   picker: {
    width: 200,
    height: 40,
    color: "#2D3032"
  }
});

export default Contact;
