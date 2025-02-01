import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div>{props.meaning.definition}</div>
      <div>
        <em>{props.meaning.example}</em>
      </div>
      <div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
