import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        {/* input, add text and a button */}
        <TextInput style={styles.textInput} placeholder="Your course goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        {/*the list of goals that are renderred */}
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput:{
    width: "80%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,

  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 0,
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
  },
});
