import React, { useState } from "react";
import { View, StyleSheet, Text ,TextInput} from "react-native";

const Setting = () => {
   const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleMemoChange = (text) => {
    setMemo(text);
  };

  return (
    <View style={styles.center}>
         <TextInput
          style={styles.input}
          placeholder="이름"
          onChangeText={handleTitleChange}
          value={title}
        />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="사진"
          onChangeText={handleMemoChange}
          value={memo}
          multiline={true}
        />
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
  input: {
    backgroundColor: "#2D3032",
    width: "90%",
    height: 40,
    marginTop: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "white",
  },
  multilineInput: {
    height: 80,
    paddingVertical: 10
  }
});


export default Setting;