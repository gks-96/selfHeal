import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/colors";

function Character({ itemData, onPress }) {
  const { character } = itemData.item;
  // console.log(itemData);
  return (
    <View style={styles.outerContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.characterStyle}>
          <Text style={styles.text}>{character}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Character;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 12,
    flex: 1,
  },
  characterStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,

    backgroundColor: GlobalStyles.colors.huskyGold,
    // borderColor: GlobalStyles.colors.huskyGold,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.huskyGold,
  },
  text: {
    color: GlobalStyles.colors.huskyGold,
    color: GlobalStyles.colors.huskyPurple,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
