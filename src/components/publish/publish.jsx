import "./publish.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import NewsCard from "../newsCard/newsCard";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [testing, setTesting] = useState([]);

  const ref = firebase.firestore().collection("testingCRUD");

  function addNews(newNews) {
    ref
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newNews.id)
      .set(newNews)
      .then(() => {
        setTesting((prev) => [newNews, ...prev]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  console.log('asdasd')
  function getDateTime() {
    return new Date().toLocaleString();
  }

  return (
    <div className="write">
      <h1>Schools (GET)</h1>
      <div className="inputBox">
        <h3>Add New</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button
          onClick={() => addNews({ title, date, image, text, id: uuidv4() })}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
