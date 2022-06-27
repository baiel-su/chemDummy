import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";
import "./newsCard.css";
import { getDocs } from "firebase/firestore";

export default function NewsCard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("testingCRUD");
  console.log(ref);

  useEffect(() => {
    const getNews = async () => {
      const items = await getDocs(ref);
      setNews(items.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getNews();
  },[]);

  return (
    <div>
      {news.map((news, key) => {
        return (
          <div key={key} className="newsCard--main">
            <h3 className="newsCard--date">{news.date}</h3>
            <img className="newsCard--image" src={news.img} />
            <h2 className="newsCard--title">
              <a href="/news-page">{news.title}</a>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
