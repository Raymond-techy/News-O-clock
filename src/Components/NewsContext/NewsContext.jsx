import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newsType, setNewsType] = useState("everything?q=tesla&");
  const [post, setPost] = useState();
  const [selectedItem, setSelectedItem] = useState("TESLA NEWS");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchNews();
  }, []);
  const fetchNews = async () => {
    const apiEndPoint = "https://newsapi.org/v2/";
    const type = newsType;
    const order = "sortBy=popularity&";
    const apiKey = "apiKey=3ebd450c552e4557b340d1910a1d9358";
    // const apiKey = "apiKey=3ebd450c552e4557b340d1910a1d9359";
    // var url =
    //   "https://newsapi.org/v2/everything?" +
    //   "q=Apple&" +
    //   "from=2022-06-30&" +
    //   "sortBy=popularity&" +
    //   "apiKey=010ae3372b164a02a8696362a3af05ed";
    var url2 = `${apiEndPoint}${type}${order}${apiKey}`;
    const response = await fetch(url2);
    const { articles } = await response.json();
    articles.map((article) => {
      article.id = uuidv4();
    });
    setIsLoading(false);
    setNewsList(articles);
  };

  const handleType = (tab, path) => {
    setIsLoading(true);
    setNewsType(path);
    setNewsType(path);
    setIsLoading(false);
    fetchNews();
    setCurrentPage(1);
    setSelectedItem(tab);
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
