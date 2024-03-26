import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getPost } from "../api/post.js";
import Searchbar from "./SearchBar.js";
import escudo from "../assets/escudo.jpg";
import slugify from "../utils/slugify.js";
import { visitedPage } from "./GAnalytics";
import FilterTabs from "./FilterTabs.js";

export default function PlayerList() {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loged, setLoged] = useState(false);

  useEffect(() => {
    visitedPage(window.location.pathname + window.location.search);
    // getPost().then((response) => { // Testing load local json
    //   setList(response);
    //   setFiltered(response);
    // });

    const fetchData = async () => {
      try {
        const response = await fetch('./data/records-03-24.json');
        const jsonData = await response.json();
        setList(jsonData);
        setFiltered(jsonData);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchData();

    setLoged(!!sessionStorage.loged);
  }, []);

  const filterList = (query) => {
    if (!query) return setFiltered(list);
    setFiltered(
      list.filter(
        (song) => song.title.toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  const filterCategory = (query) => {
    if (!query || query === "") return setFiltered(list);
    setFiltered(
      list.filter(
        (song) => song.category === query
      )
    );
  };

  let counter = 0;
  const multiplyTap = (e) => {
    counter += 1;

    if (counter === 5) {
      if (loged) {
        setLoged(false);
        sessionStorage.clear('loged');
      } else {
        const user = prompt("Ingresa usuario:");
        const pass = prompt("Ingresa password:");

        if (user === 'jozef' && pass === 'jozef.18') {
          // TODO close session
          setLoged(true);
          sessionStorage.setItem('loged', true);
        }

        counter = 0;
      }

    }
  }

  return (
    <div className="playlist">
      <Searchbar onFilter={filterList} />
      <FilterTabs onFilter={filterCategory} dataList={list} />

      {loged && <Link to={'/form'} className="main_btn">Agregar tema :D</Link>}

      <h4>Reportorio</h4>
      {filtered.map((item) => {
        if (item.public === "0") return false;
        return (
          <Link to={`/single/${slugify(item.title)}`} key={item.id}>
            <div className={`playlist__song ${parseInt(item.training) ? 'is-training' : ''}`}>
              <div className="tag"><span>ENSAYO</span></div>
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

      <img onClick={multiplyTap} className="playlist__img" src={escudo} alt="Sikuris 18 de julio" />
    </div>
  );
}
