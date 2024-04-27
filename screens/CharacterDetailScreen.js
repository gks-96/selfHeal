import { useContext, useEffect, useRef, useState } from "react";
import {
  LanguageContext,
  SUPPORTEDMETHODLOGIES,
} from "../store/language-context";

import CharacterDetailPanel from "../components/characterdetails/CharacterDetailPanel";
import CharacterWrite from "../components/characterdetails/CharacterWrite";
import { StyleSheet, Text, View } from "react-native";
import { validateAudio, validateWrite } from "../util/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import Banner from "../components/ui/Banner";
import CharacterAudio from "../components/characterdetails/CharacterAudio";

function CharacterDetailScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmissionResponse, setShowSubmissionResponse] = useState(false);
  const [submissionResponse, setSubmissionResponse] = useState("");
  const ref = useRef();
  const languageCtx = useContext(LanguageContext);

  useEffect(() => {
    ref.current?.resetCanvas();
    setShowSubmissionResponse(false);
    setSubmissionResponse("");
  }, []);

  function prevHandler() {
    ref.current?.resetCanvas();
    languageCtx.updatePrevChar(languageCtx.courseDetails.selectedCharacter);
  }

  function nextHandler() {
    ref.current?.resetCanvas();
    languageCtx.updateNextChar(languageCtx.courseDetails.selectedCharacter);
  }

  async function submitHandler(encodedImage) {
    setIsSubmitting(true);

    try {
      const response = await validateWrite(encodedImage);
      // console.log("response :", response);
      setSubmissionResponse(response);
    } catch {
      console.log(error);
      setSubmissionResponse(response);
    }

    setIsSubmitting(false);
    setShowSubmissionResponse(true);
    setTimer();
  }

  function setTimer() {
    setTimeout(() => {
      setShowSubmissionResponse(false);
    }, 5000);
  }

  async function audioSubmitHandler(encodedAudio) {
    setIsSubmitting(true);

    try {
      const response = await validateAudio(
        encodedAudio,
        languageCtx.courseDetails.course
      );
      setSubmissionResponse(response);
    } catch {
      console.log(error);
      setSubmissionResponse(response);
    }

    setIsSubmitting(false);
    setShowSubmissionResponse(true);
    setTimer();
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <View style={styles.detailContainer}>
        <CharacterDetailPanel
          char={languageCtx.courseDetails.selectedCharacter.char}
          onNextPress={nextHandler}
          onPrevPress={prevHandler}
        />
      </View>

      {showSubmissionResponse && (
        <View style={{ zIndex: 1, marginVertical: -40 }}>
          <Banner bannerResponse={submissionResponse} />
        </View>
      )}

      <View style={styles.writeContainer}>
        {languageCtx.courseDetails.methodology ===
          SUPPORTEDMETHODLOGIES.WRITE && (
          <CharacterWrite
            onSubmit={submitHandler}
            ref={ref}
            // srbmissionResponse={submissionResponse}
          />
        )}

        {languageCtx.courseDetails.methodology ===
          SUPPORTEDMETHODLOGIES.AUDIO && (
          <CharacterAudio onSubmit={audioSubmitHandler} />
        )}
      </View>
    </>
  );
}

export default CharacterDetailScreen;

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  writeContainer: {
    flex: 2,
  },
  status: {
    textAlign: "center",
  },
});
