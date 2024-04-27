import { useContext, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { LanguageContext } from "../store/language-context";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/ui/Card";

import CharacterList from "../components/characterList/CharacterList";

function CharacterListScreen() {
  const languageCtx = useContext(LanguageContext);

  const languageDetails = languageCtx.courseDetails.metaData;

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: languageCtx.courseDetails.course.toUpperCase(),
    });
  }, [languageCtx, navigation]);

  function onPressHandler(itemData) {
    languageCtx.updateSelectedChar(itemData);
    navigation.navigate("CharacterDetail");
  }

  return (
    <View style={styles.container}>
      <Card>
        <CharacterList
          characters={languageDetails.characters}
          numColumns={languageDetails.numColumns}
          onPress={onPressHandler}
        />
      </Card>
    </View>
  );
}

export default CharacterListScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
