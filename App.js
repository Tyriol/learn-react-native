import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [headerColour, setHeaderColour] = useState("#f5f5f5");

  const changeColour = () => {
    const randomColour =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHeaderColour(randomColour);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: headerColour }]}>
        <Text style={styles.headerTitle}>GONE NATIVE</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text>This is my first React Native App</Text>
        <Text>{name ? `Hi ${name}` : "What is your name?"}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
        />
        <Image />
        <Button
          style={styles.button}
          title="Press Me!"
          onPress={changeColour}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 50,
  },
  main: {
    flex: 0.8,
    paddingTop: 50,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "start",
    gap: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#000",
    width: "50%",
    padding: 8,
    color: "#fff",
    textAlign: "center",
    borderRadius: 10,
  },
  button: {
    borderColor: "green",
  },
});
