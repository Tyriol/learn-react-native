import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text>This is my first React Native App</Text>
      <Text>{name ? `Hi ${name}` : "What is your name?"}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setName(text)}
      />
      <Image />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
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
});
