import { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import {db} from '../../firebaseConfig'
import { useIsFocused } from '@react-navigation/native';
import ListView from "../../components/ListView"
import Constants from "expo-constants"
   
const Today = () => {
 const [todo, setTodo] = useState([]);
      const onFocused = useIsFocused();
          const tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date();
    nextWeek.setHours(0, 0, 0, 0);
    nextWeek.setDate(tomorrow.getDate() + 7);
    const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

    const readfromDB = async () => {
    try {
      const data = await db.collection("user");
      let tempArray = [];

      data.get().then(snap => {
        snap.forEach((doc) => {
          tempArray.push({ ...doc.data(), documentid: doc.id});
        })
        setTodo(tempArray);
        console.log(tempArray)
      })
    } catch(error) {
      console.log(error.message);
    }
  }
  const deleteContent = async (idx) => {
    
    let tmp = todo[idx];
    
    const newArray = todo.filter((num, index) => {
      return idx != index;
    });

    try {
      
      await db.collection("user").doc(tmp.documentid).delete().than(
        ()=> {
          readfromDB();
        }   
      )  
    } catch (error) {     
      console.log(error);
    }
    setTodo(newArray);
  }

  useEffect(() => {
    readfromDB()
  }, [onFocused]);
   const onCheckboxPress = (idx) => {
    if(Constants.platform.web){
      deleteContent(idx);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.todayText}>오늘</Text>
      <View>
      <ScrollView>
          {
            todo.map((item, idx) => {
              const today = new Date();
              const itemDate = new Date(item.date.seconds * 1000); // Firestore에서 가져온 timestamp 값을 Date 객체로 변환
              if (isSameDate(itemDate, today)&&item.complete==0) {
                return (
                  <ListView title={item.title} onPress={()=>onCheckboxPress(idx)}/> 
                )
              }
            })
          }
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
    color: "#0080ff",
  },
});

export default Today;