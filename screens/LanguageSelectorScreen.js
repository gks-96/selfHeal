import { StyleSheet, Text, View } from "react-native";
import AuthenticationForm from "../components/authentication/AuthenticationForm";
import Card from "../components/ui/Card";
import { useContext, useState } from "react";
import {
  LanguageContext,
  SUPPORTEDLANGUAGES,
  SUPPORTEDMETHODLOGIES,
} from "../store/language-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/ui/Button";
import { GlobalStyles } from "../constants/colors";

function LanguageSelector() {
  const languageCtx = useContext(LanguageContext);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [methodology, setMethodology] = useState("");
  const [showMethodology, setShowMethodology] = useState(false);
  const [showSubmit, setShowShowSubmit] = useState(false);
  const navigation = useNavigation();

  function languageSelectHandler(course) {
    setSelectedCourse(course);
    setShowMethodology(true);
  }

  function methodologyHandler(methodology) {
    setMethodology(methodology);
    setShowShowSubmit(true);
  }

  function pressHandler() {
    languageCtx.updateLanguage(selectedCourse, methodology);
    navigation.navigate("characterList");
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
            Punjabi
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
            Hindi
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
            Espanol
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
              Chat
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => methodologyHandler(SUPPORTEDMETHODLOGIES.CALL)}
              style={styles.button}
              buttonStyle={
                methodology === SUPPORTEDMETHODLOGIES.CALL
                  ? styles.buttonSelected
                  : null
              }
              r
              textStyle={styles.text}
            >
              Call
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
            Submit
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
    // paddingVertical: 12,
    // paddingHorizontal: 12,
  },
  buttonSelected: {
    backgroundColor: GlobalStyles.colors.huskyGold,
    opacity: 0.75,
  },
});
