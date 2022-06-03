import NewsItem from "./NewsItem";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../style/Home.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_7939e91671c3616bafeec28ff983aaa528ca&q=sport&language=en"
      );

      setArticles(res.data.results);
      console.log(res);
    };

    getArticles();
  }, []);

  return (
    <div className="ex3">
      {articles.map(({ title, description }) => (
        <NewsItem title={title} description={description} />
      ))}
    </div>
  );
};

export default NewsList;
