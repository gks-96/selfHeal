import { createContext, useState } from "react";
import { emotionMetaData } from "../constants/emotion";

export const SUPPORTEDLANGUAGES = {
  ENGLISH: "english",
  PUNJABI: "punjabi",
  HINDI: "hindi",
  SPANISH: "spanish",
};

export const SUPPORTEDMETHODLOGIES = {
  CHAT: "chat",
  SPEAK: "speak",
};

const defaultState = {
  course: "",
  methodology: "",
  metaData: {},
  selectedEmotion: {},
};

export const EmotionContext = createContext({
  emotionDetails: defaultState,
  updateLanguage: (course, methodology) => {},
});

function EmotionContextProvider({ children }) {
  const [emotionDetails, setEmotionDetails] = useState(defaultState);

  function updateLanguage(course, methodology) {
    console.log("course, ", course);
    setEmotionDetails((currentState) => {
      return {
        ...currentState,
        course: course,
        // methodology: methodology,
        metaData: emotionMetaData[course],
      };
    });
  }

  const value = {
    emotionDetails,
    updateLanguage: updateLanguage,
  };

  return (
    <EmotionContext.Provider value={value}>{children}</EmotionContext.Provider>
  );
}

export default EmotionContextProvider;
