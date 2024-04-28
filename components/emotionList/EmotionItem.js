import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/colors";

function Emotion({ itemData, onPress }) {
  const { emotion } = itemData.item;
  // console.log(itemData);
  return (
    <View style={styles.outerContainer}>
      <Pressable onPress={onPress}>
        <View style={styles.emotionStyle}>
          <Text style={styles.text}>{emotion}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Emotion;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 12,
    flex: 1,
  },
  emotionStyle: {
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
