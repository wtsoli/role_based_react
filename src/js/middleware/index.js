import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const forbiddenWords = ["spam", "money", "magnam"];

export function forbiddenWordsMiddleware({ dispatch, getState }) {
  console.log("middleware")
  return function(next) {
    console.log("next", next);
    return function(action) {
      console.log("action", action);
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }

      // if (action.type === DATA_LOADED) {
      //   return next(action);
      // }
      if (typeof action === "function") {
        return action(dispatch, getState);
      }


      return next(action);
    };
  };
}
