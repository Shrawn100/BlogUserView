import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Article() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://blogapi-production-9a30.up.railway.app/articles"
        );
        console.log(response.data);
        setResponseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  return (
    <>
      {responseData ? (
        <>
          <Navbar />
          <div className="article-container">
            {responseData.map((data) => (
              <Link
                to={`/article/${data._id}`}
                className="blog-article-container"
                key={data.id}
              >
                <img
                  className="article-image"
                  src={data.image}
                  alt={data.alt}
                />
                <div className="blog-info">
                  <h1 className="blog-info-heading">{data.title}</h1>
                  <p>{data.desc}</p>
                  <h2>{data.author.name}</h2>
                  <p className="blog-info-date">
                    Published on: {formatDate(data.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </>
  );
}

export default Article;
