import { FlatList, StyleSheet } from "react-native";
import Emotion from "./EmotionItem";

function EmotionList({ emotions, numColumns }) {
  return (
    <FlatList
      style={styles.list}
      data={emotions}
      renderItem={(itemData) => <Emotion itemData={itemData} />}
      numColumns={numColumns}
      keyExtractor={(item) => {
        return item.emotion;
      }}
    />
  );
}

export default EmotionList;

const styles = StyleSheet.create({
  list: {
    height: 200,
  },
});
