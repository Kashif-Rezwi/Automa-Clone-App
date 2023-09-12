import React from "react";

function stringReducer(text, maxLength) {
  if (text?.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

export default stringReducer;
