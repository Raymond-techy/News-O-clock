import React from "react";
import _ from "lodash";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import NewsContext from "../NewsContext/NewsContext";
function Pagination(props) {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const { handleNext, handlePrev } = useContext(NewsContext);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav className="justify-content-sm-end justify-content-end my-2">
      <ul className="pagination flex-wrap">
        <li className="page-item page-link clickable">
          <span onClick={handlePrev}>
            git <FaArrowLeft />
          </span>
        </li>
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a
              href="#1"
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item page-link">
          <span onClick={handleNext}>
            <FaArrowRight />
          </span>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
