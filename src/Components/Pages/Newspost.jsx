import React, { useEffect, useContext } from "react";
import NewsContext from "../NewsContext/NewsContext";
function Newspost({ match }) {
  const { getCurrentNews, post } = useContext(NewsContext);
  useEffect(() => {
    getCurrentNews(match.params.id);
  }, []);
  return (
    <div>
      <h2>Newspost:{match.params.id}</h2>
      <h3>{post}</h3>
      <h1>xrdcv vghvb yvb</h1>
    </div>
  );
}

export default Newspost;
