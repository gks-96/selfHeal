import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { EmotionContext } from "../store/emotion-context";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import EmotionList from "../components/emotionList/EmotionList";
import Button from "../components/ui/Button";
import CameraIcon from "../components/emotionList/CameraIcon";

function EmotionListScreen() {
  const emotionCtx = useContext(EmotionContext);

  const emotionDetails = emotionCtx.emotionDetails.metaData;

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: emotionCtx.emotionDetails.course.toUpperCase(),
    });
  }, [emotionCtx, navigation]);

  function onCameraHandler() {
    console.log("inside camera handler ");
    navigation.navigate("camera");
  }

  return (
    <View style={styles.container}>
      <Card cardStyle={{ flex: 1 }} title={"How are you feeling today ?"}>
        <View style={{ flex: 2 }}>
          <EmotionList
            emotions={emotionDetails.emotions}
            numColumns={emotionDetails.numColumns}
          />
        </View>

        <View style={{ flex: 1, marginTop: -300 }}>
          <Input
            label="Something else on your mind?"
            textInputConfig={{ multiline: true, numberOfLines: "3" }}
          />
          <Button>Submit</Button>

          <CameraIcon onPress={onCameraHandler} />
        </View>
      </Card>
    </View>
  );
}

export default EmotionListScreen;

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
