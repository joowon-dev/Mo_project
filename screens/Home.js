import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
const Home = (props) => {
  const isFocused = useIsFocused();
  const [user, setUser] = useState([]);
  let todayCount = 0;
  let nextWeekCount = 0;
  let completeCount = 0;
  let incompleteCount = 0;

  useEffect(() => {
    const readfromDB = async () => {
      try {
        const data = await db.collection('user');
        let tempArray = [];
        data.get().then((snap) => {
          snap.forEach((doc) => {
            tempArray.push({ ...doc.data(), documentID: doc.id });
          });
          setUser(tempArray);
        });
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    };
    readfromDB();
  }, [isFocused]);

  const handlePressIn = () => {
    props.navigation.navigate('오늘');
  };
  const handlePressIn2 = () => {
    props.navigation.navigate('예정');
  };
  const handlePressIn3 = () => {
    props.navigation.navigate('전체');
  };
  const handlePressIn4 = () => {
    props.navigation.navigate('완료됨');
  };
  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const countElements = (array) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date();
    nextWeek.setHours(0, 0, 0, 0);
    nextWeek.setDate(tomorrow.getDate() + 7);

    array.forEach((item) => {
      const itemDate = new Date(item.date.seconds * 1000); // Firestore에서 가져온 timestamp 값을 Date 객체로 변환

      if (isSameDate(itemDate, today)&&item.complete==0) {
        todayCount++;
      }

      if (itemDate >= tomorrow && itemDate <= nextWeek &&item.complete==0 ) {
        nextWeekCount++;
      }

      if (item.complete === 1) {
        completeCount++;
      } else {
        incompleteCount++;
      }
    });
  };
  countElements(user);
  return (
    <View style={styles.center}>
      <View>
        <CustomButton
          handlePressIn={handlePressIn}
          icon="calendar"
          color="#0080ff"
          name="오늘"
          num={todayCount}
        />
        <CustomButton
          handlePressIn={handlePressIn2}
          icon="server"
          color="#f34336"
          name="예정"
          num={nextWeekCount}
        />
        <CustomButton
          handlePressIn={handlePressIn3}
          icon="inbox"
          color="#7f7f7f"
          name="전체"
          num={incompleteCount}
        />
        <CustomButton
          handlePressIn={handlePressIn4}
          icon="check"
          color="#7f8385"
          name="완료됨"
          num={completeCount}
        />
      </View>
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
});

export default Home;
