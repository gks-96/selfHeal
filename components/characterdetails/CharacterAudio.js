import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import {
  AndroidAudioEncoder,
  AndroidOutputFormat,
  IOSAudioQuality,
  IOSOutputFormat,
  Recording,
} from "expo-av/build/Audio";
import { useState } from "react";
import axios from "axios";
import IconButton from "../ui/IconButton";
import Card from "../ui/Card";
import { GlobalStyles } from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const CharacterAudio = ({ onSubmit }) => {
  const [recording, setRecording] = useState(null);
  const [uri, setURI] = useState("");
  const [uploadError, setUploadError] = useState("");

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      setUploadError(false);
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync({
        isMeteringEnabled: true,
        android: {
          ...Audio.RecordingOptionsPresets.HIGH_QUALITY.android,
          extension: ".wav",
          outputFormat: AndroidOutputFormat.DEFAULT,
          audioEncoder: AndroidAudioEncoder.DEFAULT,
        },
        ios: {
          ...Audio.RecordingOptionsPresets.HIGH_QUALITY.ios,
          extension: ".wav",
          outputFormat: IOSOutputFormat.LINEARPCM,
        },
        web: {
          mimeType: "audio/wav",
          bitsPerSecond: 128000,
        },
      });
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setUploadError(false);
    setRecording(undefined);
    await recording?.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording?.getURI();
    setURI(uri);
    console.log("Recording stopped and stored at", uri);
  }

  const blobToBase64 = (blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  async function upload() {
    console.log("in upload");
    if (recording) {
      console.log("cant send");
      setUploadError(true);
      return;
    }

    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
      });

      const audioBase64 = await blobToBase64(blob);
      const splittedAudio = audioBase64.split(";")[1].split(",")[1];
      onSubmit(splittedAudio);
      //   console.log("request ", blob);

      //   const url = "http://192.168.12.118:8080/api/punjabi/sound/verify/gcp";
      //   const result = await axios.post(url, {
      //     encodedAudio: splittedAudio,
      //   });
      //   console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {recording ? (
        <Text style={styles.message}> Recording your sound !</Text>
      ) : null}
      {uploadError ? (
        <Text style={styles.errorMessage}>
          Please record first before uploading !
        </Text>
      ) : null}
      <Card cardStyle={styles.buttons}>
        {recording ? (
          <IconButton
            icon={"stop"}
            color={GlobalStyles.colors.huskyGold}
            size={36}
            onPress={() => stopRecording()}
          />
        ) : (
          <IconButton
            icon={"megaphone-sharp"}
            color={GlobalStyles.colors.huskyGold}
            size={36}
            onPress={() => startRecording()}
          />
        )}
        <IconButton
          icon="cloud-upload"
          color={GlobalStyles.colors.huskyGold}
          size={36}
          onPress={() => upload()}
        />
      </Card>
    </SafeAreaView>
  );
};

export default CharacterAudio;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginBottom: 36,
    borderColor: GlobalStyles.colors.huskyPurple,
    borderWidth: 2,
    borderRadius: 4,
    flex: 1,
    justifyContent: "flex-end",
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
  buttons: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
