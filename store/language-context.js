import { createContext, useState } from "react";
import { languageMetaData } from "../constants/character";

export const SUPPORTEDLANGUAGES = {
  ENGLISH: "english",
  PUNJABI: "punjabi",
  HINDI: "hindi",
};

export const SUPPORTEDMETHODLOGIES = {
  CHAT: "chat",
  CALL: "call",
};

const defaultState = {
  course: "",
  methodology: "",
  metaData: {},
  selectedCharacter: {},
};

export const LanguageContext = createContext({
  courseDetails: defaultState,
  updateLanguage: (course, methodology) => {},
  updateSelectedChar: (char) => {},
  updateNextChar: (char) => {},
  updatePrevChar: (char) => {},
});

function LanguageContextProvider({ children }) {
  const [courseDetails, setCourseDetails] = useState(defaultState);

  function updateLanguage(course, methodology) {
    setCourseDetails((currentState) => {
      return {
        ...currentState,
        course: course,
        methodology: methodology,
        metaData: languageMetaData[course],
      };
    });
  }

  function updateSelectedChar(char) {
    console.log(char);
    const name = courseDetails.metaData.characters[char.index].character;
    setCourseDetails((currentState) => {
      return {
        ...currentState,
        selectedCharacter: { char: name, index: char.index },
      };
    });
  }

  function updateNextChar(currentChar) {
    const length = courseDetails.metaData.characters.length;
    const index = (currentChar.index + 1) % length;
    let nextChar = courseDetails.metaData.characters[index];
    console.log(currentChar, nextChar, courseDetails);

    setCourseDetails((currentState) => {
      return {
        ...currentState,
        selectedCharacter: {
          index: index,
          char: nextChar.character,
        },
      };
    });
  }

  function updatePrevChar(currentChar) {
    const length = courseDetails.metaData.characters.length;
    const index = length - ((length - currentChar.index) % length) - 1;
    let prevChar = courseDetails.metaData.characters[index];
    console.log(currentChar, index, prevChar, courseDetails);

    setCourseDetails((currentState) => {
      return {
        ...currentState,
        selectedCharacter: {
          index: index,
          char: prevChar.character,
        },
      };
    });
  }

  const value = {
    courseDetails: courseDetails,
    updateLanguage: updateLanguage,
    updateSelectedChar: updateSelectedChar,
    updateNextChar: updateNextChar,
    updatePrevChar: updatePrevChar,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContextProvider;
