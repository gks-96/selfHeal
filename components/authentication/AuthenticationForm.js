import { StyleSheet, Text, View } from "react-native";
import Input from "../ui/Input";
import { useState } from "react";
import Button from "../ui/Button";

function AuthenticationForm({ onSubmit, onCancel }) {
  const [inputValues, setInputValues] = useState({
    userName: "",
    password: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const userDetails = {
      userName: inputValues.userName,
      password: inputValues.password,
    };
    onSubmit(userDetails);
  }

  function cancelHandler() {
    setInputValues(() => {
      return {
        userName: "",
        password: "",
      };
    });
    onCancel();
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="UserName"
          textInputConfig={{
            onChangeText: inputChangeHandler.bind(this, "userName"),
            value: inputValues.userName,
          }}
        />
        <Input
          label="Password"
          textInputConfig={{
            secureTextEntry: true,
            onChangeText: inputChangeHandler.bind(this, "password"),
            value: inputValues.password,
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={cancelHandler} style={styles.button}>
          New User
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          Login
        </Button>
      </View>
    </View>
  );
}

export default AuthenticationForm;

const styles = StyleSheet.create({
  form: {
    // marginTop: 16,
  },

  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 12,
  },
});
