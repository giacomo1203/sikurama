import { useState } from "react";

export default function FilterTabs({ onFilter, dataList }) {
  const [category, setCategory] = useState("");

  const categories = dataList.reduce((group, a) => {
    group.add(a.category);
    return group;
  }, new Set());

  return (
    <div className="filtertabs">
      <button
        className="filtertabs__item"
        onClick={() => {
          setCategory("");
          onFilter("");
        }}
      >
        Todos
      </button>

      {Array.from(categories).map((item) => {
        return (
          <button
            key={item}
            className={`filtertabs__item ${category === item ? 'is-active' : ''}`}
            onClick={() => {
              setCategory(item);
              onFilter(item);
            }}
          >
            {item}
          </button>
        );
      })}

    </div>
  );
}
