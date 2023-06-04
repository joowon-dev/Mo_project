import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { db } from '../firebaseConfig';
import { useIsFocused } from '@react-navigation/native';

const CalendarView = () => {
  const markedDates = {
    '2023-05-25': { text: 'Custom Text 1' },
    '2023-05-26': { text: 'Custom Text 2', selected: true },
    '2023-05-27': { text: 'Custom Text 3', selected: true },
  };

  const [todo, setTodo] = useState({});

  const DayComponent = ({ date, state }) => {
    return (
      <View style={[styles.dayContainer, state === 'today' && styles.todayContainer]}>
        <Text style={[styles.day, state === 'today' && styles.todayText]}>{date.day}</Text>
        {todo[date.dateString]?.text && (
          <Text style={styles.text}>{todo[date.dateString].text}</Text>
        )}
      </View>
    );
  };

  const onFocused = useIsFocused();
  useEffect(() => {
    const readfromDB = async () => {
      try {
        const data = await db.collection('user').get();
        const tempArray = data.docs.map(doc => ({ ...doc.data(), documentid: doc.id }));

        const updatedTodo = {};
        tempArray.forEach((item) => {
          const formattedDate = item.date.toISOString().split('T')[0];
          updatedTodo[formattedDate] = {
            text: item.title,
          };
        });

        setTodo(updatedTodo);
        console.log("asdasdasd");
      } catch (error) {
        console.log(error.message);
      }
    };

    readfromDB();
  }, [onFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={markedDates}
          dayComponent={DayComponent}
          hideExtraDays={true}
          theme={{
            textDayFontFamily: 'Arial',
            textMonthFontFamily: 'Arial',
            textDayHeaderFontFamily: 'Arial',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  calendarContainer: {
    flex: 1,
  },
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  todayContainer: {
    backgroundColor: 'lightgray',
  },
  day: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  todayText: {
    color: 'red',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default CalendarView;
