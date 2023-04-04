import { useState, useEffect } from "react";
import { getNews } from "../api/news.js";
import escudo from "../assets/escudo.jpg";
import { visitedPage } from "./GAnalytics";
import dateFormat from "../utils/dateFormat";
import { FiCalendar } from "react-icons/fi";

export default function News() {
  const [news, setNews] = useState({values: []});

  useEffect(() => {
    visitedPage(window.location.pathname + window.location.search);

    getNews().then((response) => {
      setNews(response);
    });
  }, []);

  return (
    <div className="playlist">
      <h4><FiCalendar /> Noticias</h4>
      {
        !news.values ?
          <div className="playlist__news__noresult">
            Sin novedades...
          </div>
        : news.values.map((newsItem) => {
          return (
            <div className="playlist__news" key={newsItem[1]}>
              <div className="playlist__news__date">
                <span className="number">{dateFormat(newsItem[0]).day}</span>
                <span>{dateFormat(newsItem[0]).month}</span>
              </div>
              <div className="playlist__detail">
                <p>{newsItem[1]}</p>
                {newsItem[2] && <p>{newsItem[2]}</p>}
              </div>
            </div>
          );
        })}
      <img className="playlist__img" src={escudo} alt="Sikuris 18 de julio" />
    </div>
  );
}
