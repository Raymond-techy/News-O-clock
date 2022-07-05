import { useContext } from "react";
import NewsContext from "./NewsContext/NewsContext";
function FilterTab() {
  const { handleType, selectedItem } = useContext(NewsContext);
  const columns = [
    { name: "TECHNOLOGY", path: "&category=technology" },
    { name: "BUSINESS", path: "&category=business" },
    { name: "POLITICS", path: "&category=politics" },
    { name: "ENTERTAINMENT", path: "&category=entertainment" },
    { name: "SPORT", path: "&category=sports" },
    { name: "HEALTH", path: "&category=health" },
  ];
  return (
    <ul className="list-group d-flex flex-row justify-content-center flex-wrap">
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
