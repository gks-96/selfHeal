import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/colors";

function Button({ children, onPress, textStyle, buttonStyle }) {
  const buttonStyles = [styles.button];
  if (buttonStyle) {
    buttonStyles.push(buttonStyle);
  }

  return (
    <Pressable onPress={onPress}>
      <View style={[buttonStyles]}>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.huskyGold,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
