import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/colors";
import IconButton from "../ui/IconButton";

function CameraIcon({ onPress }) {
  return (
    <>
      <Text style={styles.textStyle}>
        Don't want to type? Let us identify your emotion through your face
      </Text>
      <View style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          icon={"camera"}
          size={50}
          onPress={onPress}
          color={GlobalStyles.colors.huskyGold}
        />
      </View>
    </>
  );
}

export default CameraIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    padding: 10,
    fontSize: 14,
    color: "white",
    marginBottom: 4,
  },
});
