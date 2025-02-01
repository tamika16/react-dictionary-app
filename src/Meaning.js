import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <p>
        <em>{props.meaning.example}</em>
      </p>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
