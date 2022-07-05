import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newsType, setNewsType] = useState("&category=technology");
  const [post, setPost] = useState();
  const [selectedItem, setSelectedItem] = useState("TECHNOLOGY");
  const [currentPage, setCurrentPage] = useState(1);
  const apiEndPoint = process.env.REACT_APP_NEWS_URL;
  const apikey = process.env.REACT_APP_NEWS_API_KEY;
  useEffect(() => {
    fetchNews(newsType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchNews = async (newsType) => {
    const url1 = `${apiEndPoint}?apikey=${apikey}${newsType}&language=en`;
    const response = await fetch(url1);
    const { results } = await response.json();
    results.map((article) => (article.id = uuidv4()));
    setNewsList(results);
    setIsLoading(false);
  };

  const handleType = async (tab, path) => {
    setSelectedItem(tab);
    setIsLoading(true);
    setNewsType(path);
    setNewsType(path);
    await fetchNews(newsType);
    setCurrentPage(1);
    setIsLoading(false);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < newsList.length / 10) setCurrentPage(currentPage + 1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getCurrentNews = (id) => {
    const currentPost = newsList.filter((news) => news.id === id);
    setPost(currentPost);
  };
  return (
    <NewsContext.Provider
      value={{
        newsList,
        isLoading,
        post,
        currentPage,
        selectedItem,
        handlePageChange,
        handlePrev,
        handleNext,
        handleType,
        getCurrentNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
