import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);

    //[...courseGoals, enteredGoalText ]

    courseGoals.push(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        {/* input, add text and a button */}
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {/*the list of goals that are renderred */}
          <Text>List of goals...</Text>
          {courseGoals.length == 0 && <Text>Add the goal</Text>}
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
  container: {
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
