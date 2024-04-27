import { StyleSheet, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import Banner from "../ui/Banner";
import CharacterWrite from "./CharacterWrite";

const AudioWriteSelector = ({ type }) => {
  const [isSubmitting, setIsSumitting] = useState(false);
  const [showSubmissionResponse, setShowSubmissionResponse] = useState(false);
  const [submissionResponse, setSubmissionResponse] = useState("");

  const ref = useRef();

  useEffect(() => {
    ref.current.resetCanvas();
    setShowSubmissionResponse(false);
    setSubmissionResponse("");
  }, []);

  async function submitHandler(encodedImage) {
    setIsSumitting(true);

    try {
      const response = await validateWrite(encodedImage);
      // console.log("response :", response);
      setSubmissionResponse(response);
    } catch {
      // console.log(error);
      setSubmissionResponse(response);
    }

    setIsSumitting(false);
    setShowSubmissionResponse(true);
    setTimer();
  }

  function setTimer() {
    setTimeout(() => {
      setShowSubmissionResponse(false);
    }, 5000);
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <View>
        <CharacterWrite
          onSubmit={submitHandler}
          ref={ref}
          // srbmissionResponse={submissionResponse}
        />
      </View>
      {showSubmissionResponse && (
        <View style={{ zIndex: 1, marginVertical: -40 }}>
          <Banner bannerResponse={submissionResponse} />
        </View>
      )}
    </>
  );
};

export default AudioWriteSelector;
