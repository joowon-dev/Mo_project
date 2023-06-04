import { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, ScrollView} from "react-native";
import CustomListButton from "../components/Button/customListButton"
import {db} from "../firebaseConfig"
import { useIsFocused } from '@react-navigation/native';
const List = ({ navigation }) => {
    const [list, setList] = useState([]);
    const [todocount, setTodocount] = useState([]);
    const onFocused = useIsFocused();
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
  const readfromuserDB = async () => {
    try {
      const data = await db.collection("user");
      let tempArray = [];

      data.get().then(snap => {
        snap.forEach((doc) => {
          tempArray.push({ ...doc.data(), documentid: doc.id });
        });
      const countBySelectedList = tempArray.reduce((counts, item) => {
  const { selectedList, complete } = item;
  if (complete === 0) {
    counts[selectedList] = (counts[selectedList] || 0) + 1;
  }
  return counts;
}, {});
setTodocount(countBySelectedList)
        console.log(todocount);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    readfromDB()
    readfromuserDB()
  }, [onFocused]);
    const handlePressplusIn = (item) => {
      navigation.navigate("목록",{props:item})

  };
  return (
    <View style={styles.center}>
      <View>
      <ScrollView>
          {list.map((item, idx) => (
                  <CustomListButton
                    handlePressIn={()=>handlePressplusIn(item)}
                    icon={item.icon}
                    color={item.color}
                    name={item.title}
                    num = {todocount[item.title]} 
                  />
                )
              
            )
          }
      </ScrollView>
      
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
    backgroundColor:"#000000"
  },
});

export default List;