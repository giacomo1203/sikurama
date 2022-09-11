import { useState } from 'react';
import { FiSearch, FiX } from "react-icons/fi";

export default function Searchbar({onFilter}) {
    const [inputText, setInputText] = useState("");

    return (
      <div className="searchbar">
        <input
            className="searchbar__input"
            type="text"
            value={inputText}
            placeholder="Buscar tema"
            onChange={(e) => {
                setInputText(e.target.value);
                onFilter(e.target.value);
            }}
        />
        <button
            className="searchbar__btn"
            onClick={()=> {
                setInputText('');
                onFilter('');
            }}>
            {inputText === '' ? <FiSearch /> : <FiX />}
        </button>
      </div>
    );
}