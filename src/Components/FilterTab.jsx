import { useContext } from "react";
import NewsContext from "./NewsContext/NewsContext";
function FilterTab() {
  const { handleType, selectedItem } = useContext(NewsContext);
  const columns = [
    { name: "TESLA", path: "everything?q=tesla&" },
    { name: "APPLE", path: "everything?q=Apple&" },
    { name: "BBC NEWS", path: "top-headlines?sources=bbc-news&" },
    { name: "USA", path: "top-headlines?country=us&" },
    { name: "TECHCRUNCH", path: "top-headlines?sources=techcrunch&" },
  ];
  return (
    <ul className="list-group d-flex flex-row justify-content-center">
      {columns.map((tab) => (
        <li
          onClick={() => handleType(tab.name, tab.path)}
          key={tab.name}
          className={
            tab.name === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
}

export default FilterTab;
