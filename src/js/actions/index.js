import { ADD_ARTICLE } from "../constants/action-types";
import { Component } from "react";

export function addArticle(payload) {
  console.log("add article");
  return { type: ADD_ARTICLE, payload };
}

export function getData(compo) {
  return function(dispatch, getState) {
    console.log("hehehehe");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
        let state = getState();
        compo.setState(state);
      });
  };
}
