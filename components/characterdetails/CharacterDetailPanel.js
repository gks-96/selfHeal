import { StyleSheet, Text, View } from "react-native";
import IconButton from "../ui/IconButton";
import { GlobalStyles } from "../../constants/colors";

function CharacterDetailPanel({ onNextPress, onPrevPress, char }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <IconButton
          icon="arrow-back-circle"
          onPress={onPrevPress}
          color={GlobalStyles.colors.huskyPurple}
        ></IconButton>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>{char}</Text>
      </View>
      <View style={styles.right}>
        <IconButton
          icon="arrow-forward-circle"
          onPress={onNextPress}
          color={GlobalStyles.colors.huskyPurple}
        ></IconButton>
      </View>
    </View>
  );
}

export default CharacterDetailPanel;

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: GlobalStyles.colors.huskyPurple,
    borderWidth: 2,
    borderRadius: 6,
  },
  left: {
    flex: 1,
    // backgroundColor: "red",
  },
  right: {
    flex: 1,
    // backgroundColor: "blue",
    flexDirection: "row-reverse",
  },
  main: {
    flex: 3,
    alignItems: "stretch",
    // backgroundColor: "purple",
  },
  text: {
    fontSize: 200,
    textAlign: "center",
  },
});
