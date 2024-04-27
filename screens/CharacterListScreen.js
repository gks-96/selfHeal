import { useContext, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { LanguageContext } from "../store/language-context";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { AntDesign } from "@expo/vector-icons";
import CharacterList from "../components/characterList/CharacterList";
import { GlobalStyles } from "../constants/colors";
import CameraScreen from "./CameraScreen";

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
        <Text style={styles.textStyle}> How are you feeling today ? </Text>
        <CharacterList
          characters={languageDetails.characters}
          numColumns={languageDetails.numColumns}
          onPress={onPressHandler}
        />
        <Input style={{ fontSize: 20 }} label="Something else on your mind?" />

        <Text style={styles.textStyle}>
          Don't want to type? Let us identify your emotion through your face
        </Text>
        <AntDesign
          style={{ alignSelf: "center" }}
          name="camera"
          size={50}
          onPress={onCameraHandler}
          color={GlobalStyles.colors.huskyGold}
        />
      </Card>
    </View>
  );

  function onCameraHandler() {
    console.log("inside camera handler ");
    <CameraScreen />;
  }
}

export default CharacterListScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textStyle: {
    padding: 10,
    fontSize: 22,
    color: "white",
    marginBottom: 4,
  },
});
