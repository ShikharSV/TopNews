import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

const News = (props) => {
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const capitalizeFirstLetter = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };

  const apiKey = import.meta.env.VITE_API_KEY;
  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
  }, [page]);

  return (
    <>
      {loading && <PuffLoader />}
      <h1 className="text-5xl mx-8 mt-6 text-slate-700">
        Top Headlines-{capitalizeFirstLetter(props.category)}
      </h1>
      <div className="mx-8 grid grid-cols-3 gap-4">
        {!loading &&
          articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://miro.medium.com/max/1400/0*V2oD_f5kiIeDLohK.jpg"
                }
                author={element.author ? element.author : "Unknown"}
                publishedAt={element.publishedAt}
                newsUrl={element.url}
              />
            );
          })}
      </div>
      <div className="my-8 text-center mx-auto">
        <button
          disabled={page <= 1}
          className="font-bold py-2 px-4 hover:bg-black hover:text-white transition ease-in-out duration-200"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          &larr; Prev
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className="border-l font-bold py-2 px-4 hover:bg-black hover:text-white transition ease-in-out duration-200"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
