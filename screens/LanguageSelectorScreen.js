import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Card from "../components/ui/Card";
import {
  EmotionContext,
  SUPPORTEDLANGUAGES,
  SUPPORTEDMETHODLOGIES,
} from "../store/emotion-context";
import Button from "../components/ui/Button";
import { GlobalStyles } from "../constants/colors";

function LanguageSelector() {
  const emotionCtx = useContext(EmotionContext);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [methodology, setMethodology] = useState("");
  const [showMethodology, setShowMethodology] = useState(false);
  const [showSubmit, setShowShowSubmit] = useState(false);
  const navigation = useNavigation();

  function languageSelectHandler(course) {
    setSelectedCourse(course);
    emotionCtx.updateLanguage(course);
    setShowMethodology(true);
  }

  function methodologyHandler(methodology) {
    setMethodology(methodology);
    setShowShowSubmit(true);
  }

  function pressHandler() {
    navigation.navigate("emotionList");
  }

  return (
    <View>
      <Card title="Choose Your Language!">
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => languageSelectHandler(SUPPORTEDLANGUAGES.ENGLISH)}
            style={styles.button}
            buttonStyle={
              selectedCourse === SUPPORTEDLANGUAGES.ENGLISH
                ? styles.buttonSelected
                : null
            }
            textStyle={styles.text}
          >
            English
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => languageSelectHandler(SUPPORTEDLANGUAGES.PUNJABI)}
            style={styles.button}
            buttonStyle={
              selectedCourse === SUPPORTEDLANGUAGES.PUNJABI
                ? styles.buttonSelected
                : null
            }
            textStyle={styles.text}
          >
            ਪੰਜਾਬੀ
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => languageSelectHandler(SUPPORTEDLANGUAGES.HINDI)}
            style={styles.button}
            buttonStyle={
              selectedCourse === SUPPORTEDLANGUAGES.HINDI
                ? styles.buttonSelected
                : null
            }
            textStyle={styles.text}
          >
            हिंदी
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => languageSelectHandler(SUPPORTEDLANGUAGES.SPANISH)}
            style={styles.button}
            buttonStyle={
              selectedCourse === SUPPORTEDLANGUAGES.SPANISH
                ? styles.buttonSelected
                : null
            }
            textStyle={styles.text}
          >
            Español
          </Button>
        </View>
      </Card>

      {showMethodology && (
        <Card title="Choose your way to seek help!">
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => methodologyHandler(SUPPORTEDMETHODLOGIES.CHAT)}
              style={styles.button}
              buttonStyle={
                methodology === SUPPORTEDMETHODLOGIES.CHAT
                  ? styles.buttonSelected
                  : null
              }
              textStyle={styles.text}
            >
              {emotionCtx.emotionDetails.metaData.i18["chat"]}
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => methodologyHandler(SUPPORTEDMETHODLOGIES.SPEAK)}
              style={styles.button}
              buttonStyle={
                methodology === SUPPORTEDMETHODLOGIES.SPEAK
                  ? styles.buttonSelected
                  : null
              }
              textStyle={styles.text}
            >
              {emotionCtx.emotionDetails.metaData.i18["speak"]}
            </Button>
          </View>
        </Card>
      )}

      {showSubmit && (
        <View style={styles.submitContainer}>
          <Button
            onPress={() => pressHandler()}
            style={styles.submitButton}
            textStyle={styles.text}
          >
            {emotionCtx.emotionDetails.metaData.i18.submit}
          </Button>
        </View>
      )}
    </View>
  );
}

export default LanguageSelector;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 16,
  },
  button: {
    paddingVertical: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  submitcontainer: {
    margin: 36,
  },
  submitButton: {
    margin: 16,
  },
  buttonSelected: {
    backgroundColor: GlobalStyles.colors.huskyGold,
    opacity: 0.75,
  },
});
