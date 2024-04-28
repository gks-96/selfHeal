import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/colors";

function Input({ label, textInputConfig }) {
  const inputStyles = [styles.input];
  if (textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    // marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: "white",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 8,
    fontSize: 16,
    color: GlobalStyles.colors.huskyPurple,
  },
  multiline: {
    height: 100,
  },
});
