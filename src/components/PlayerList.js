import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../api/post.js";
import Searchbar from "./SearchBar.js";
import escudo from "../assets/escudo.jpg";
import slugify from "../utils/slugify.js";
import { visitedPage } from "./GAnalytics";

export default function PlayerList() {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    visitedPage(window.location.pathname + window.location.search);
    getPost().then((response) => {
      setList(response);
      setFiltered(response);
    });
  }, []);

  const filterList = (query) => {
    if (!query) setFiltered(list);
    setFiltered(
      list.filter(
        (song) => song.title.toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  return (
    <div className="playlist">
      <Searchbar onFilter={filterList} />
      <h4>Reportorio</h4>
      {filtered.map((item) => {
        return (
          <Link to={`/single/${slugify(item.title)}`} key={item.id}>
            <div className="playlist__song">
              <div className="playlist__detail">
                <div>
                  {item.title} ({item.category})
                </div>
                <span>{item.author}</span>
              </div>
              <div className="playlist__btn">
                <FiChevronRight />
              </div>
            </div>
          </Link>
        );
      })}
      <img className="playlist__img" src={escudo} alt="Sikuris 18 de julio" />
    </div>
  );
}
