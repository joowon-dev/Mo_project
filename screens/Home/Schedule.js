import { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import {db} from '../../firebaseConfig'
import { useIsFocused } from '@react-navigation/native';
import ListView from "../../components/ListView"
import Constants from "expo-constants"
   
const Schedule = () => {
 const [todo, setTodo] = useState([]);
      const onFocused = useIsFocused();
          const tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date();
    nextWeek.setHours(0, 0, 0, 0);
    nextWeek.setDate(tomorrow.getDate() + 7);
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
      <Text style={styles.todayText}>예정</Text>
      <View>
      <ScrollView>
          {
            todo.map((item, idx) => {
              const currentDate = new Date();
              const itemDate = new Date(item.date.seconds * 1000)
              if (itemDate >= tomorrow && itemDate <= nextWeek &&item.complete==0 ) {
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
    color: "#f34336",
  },
});

export default Schedule;