import { FlatList, StyleSheet } from "react-native";
import Character from "./CharacterItem";

function CharacterList({ characters, numColumns, onPress }) {
  return (
    <FlatList
      style={styles.list}
      data={characters}
      renderItem={(itemData) => (
        <Character itemData={itemData} onPress={() => onPress(itemData)} />
      )}
      numColumns={numColumns}
      keyExtractor={(item) => {
        return item.character;
      }}
    />
  );
}

export default CharacterList;

const styles = StyleSheet.create({
  list: {},
});
