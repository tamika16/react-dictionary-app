import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Images from "./Images.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    setImages(response.data.photos);
    console.log(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "ebca453d09d2of07d0aaa7ab4fdt23ed";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imgApiKey = "ebca453d09d2of07d0aaa7ab4fdt23ed";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImagesResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          suggested words: appreciate, caring, compassionate, loving,
          sympathetic
        </div>
      </section>
      <Results results={results} />
      <Images images={images} />
    </div>
  );
}
