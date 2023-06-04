import { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { db } from '../firebaseConfig'
import { useIsFocused } from '@react-navigation/native';
import ListView from "../components/ListView"
import Constants from "expo-constants"

const Listtodo = ({ route }) => {
  const [todo, setTodo] = useState([]);
  const onFocused = useIsFocused();
  const { props } = route.params;

  const readfromDB = async () => {
    try {
      const data = await db.collection("user");
      let tempArray = [];

      data.get().then(snap => {
        snap.forEach((doc) => {
          tempArray.push({ ...doc.data(), documentid: doc.id });
        });
        setTodo(tempArray);
        console.log(tempArray);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteContent = async (idx) => {
    let tmp = todo[idx];

    const newArray = todo.filter((num, index) => {
      return idx !== index;
    });

    try {
      await db.collection("user").doc(tmp.documentid).update({
        // Add the fields you want to update
        complete: 1,
        // ...
      });
      readfromDB();
    } catch (error) {
      console.log(error);
    }

    setTodo(newArray);
  };

  useEffect(() => {
    readfromDB();
  }, [onFocused]);

  const onCheckboxPress = (idx) => {
    if (Constants.platform.web) {
      deleteContent(idx);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.todayText, { color: props.color }]}>
        {props.title}
      </Text>
      <View>
        <ScrollView>
          {todo.map((item, idx) => {
            const currentDate = new Date();
            if (item.complete === 0 && item.selectedList == props.title) {
              return (
                <ListView title={item.title} onPress={() => onCheckboxPress(idx)} />
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#000000",
    padding: 20,
  },
  todayText: {
    fontSize: 30,
    fontFamily: "Arial",
  },
});

export default Listtodo;
