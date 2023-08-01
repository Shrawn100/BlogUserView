import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function App() {
  const [response, setResponse] = useState(false);
  const [blogOne, setBlogOne] = useState({});
  const [blogTwo, setBlogTwo] = useState({});
  const [blogThree, setBlogThree] = useState({});

  useEffect(() => {
    axios
      .get("https://blogapi-production-9a30.up.railway.app/frontpage")
      .then((response) => {
        console.log(response.data);
        setResponse(response.data);
        setBlogOne(response.data[0]);
        setBlogTwo(response.data[1]);
        setBlogThree(response.data[2]);
      });
  }, []);

  console.log(blogOne.image);
  return (
    <>
      <Navbar />

      {response ? (
        <div className="front-page-container">
          <div className="home-page-background">
            <h1>Let us help you find your next getaway</h1>
          </div>
          <h2 className="new-section">This Week's Visits</h2>
          <div className="front-page-visits">
            <Link
              className="blog-one-visit-cell"
              to={`/article/${blogOne._id}`}
            >
              <img
                className="front-page-blogone-img"
                src={blogOne.image}
                alt={blogOne.alt}
              ></img>
              <div className="frontpage-blog-info-container">
                <h3 className="blog-one-heading">{blogOne.title}</h3>
                <p>{blogOne.desc}</p>
                <button>Visit Here</button>
              </div>
            </Link>

            <Link
              className="blog-two-visit-cell"
              to={`/article/${blogTwo._id}`}
            >
              <img
                className="front-page-blogtwo-img"
                src={blogTwo.image}
                alt={blogTwo.alt}
              ></img>
              <div className="frontpage-blog-info-container">
                <h3 className="blog-two-heading">{blogTwo.title}</h3>
                <p>{blogTwo.desc}</p>
                <button>Visit Here</button>
              </div>
            </Link>

            <Link
              className="blog-three-visit-cell"
              to={`/article/${blogThree._id}`}
            >
              <img
                className="front-page-blogthree-img"
                src={blogThree.image}
                alt={blogThree.alt}
              ></img>
              <div className="frontpage-blog-info-container">
                <h3 className="blog-three-heading">{blogThree.title}</h3>
                <p>{blogThree.desc}</p>
                <button>Visit Here</button>
              </div>
            </Link>
          </div>
          <h2 className="new-section">About Us</h2>
          <div className="about-section">
            <div className="about-img"></div>
            <p className="about-desc">
              Writing and travelling, two of our favourite things. Our goal is
              to use our passion to help inspire fellow travellers to find their
              ideal travel destinations.
            </p>
          </div>
          <h2 className="new-section">A Writer?</h2>
          <div className="writer-section-container">
            <p>
              Are you a writer? Visit the{" "}
              <a href="https://shrawn100.github.io/BlogAuthorView">
                author blog
              </a>{" "}
              website to help us create more of these wonderful blogs
            </p>
          </div>
          <footer>
            <div className="contacts">
              Find us at:{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M14.667 12c0 1.473-1.194 2.667-2.667 2.667-1.473 0-2.667-1.193-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667zm3.846-3.232c.038.843.046 1.096.046 3.232s-.008 2.389-.046 3.233c-.1 2.15-1.109 3.181-3.279 3.279-.844.038-1.097.047-3.234.047-2.136 0-2.39-.008-3.232-.046-2.174-.099-3.181-1.132-3.279-3.279-.039-.845-.048-1.098-.048-3.234s.009-2.389.047-3.232c.099-2.152 1.109-3.181 3.279-3.279.844-.039 1.097-.047 3.233-.047s2.39.008 3.233.046c2.168.099 3.18 1.128 3.28 3.28zm-2.405 3.232c0-2.269-1.84-4.108-4.108-4.108-2.269 0-4.108 1.839-4.108 4.108 0 2.269 1.84 4.108 4.108 4.108 2.269 0 4.108-1.839 4.108-4.108zm1.122-4.27c0-.53-.43-.96-.96-.96s-.96.43-.96.96.43.96.96.96c.531 0 .96-.43.96-.96zm6.77-7.73v24h-24v-24h24zm-4 12c0-2.172-.009-2.445-.048-3.298-.131-2.902-1.745-4.52-4.653-4.653-.854-.04-1.126-.049-3.299-.049s-2.444.009-3.298.048c-2.906.133-4.52 1.745-4.654 4.653-.039.854-.048 1.127-.048 3.299 0 2.173.009 2.445.048 3.298.134 2.906 1.746 4.521 4.654 4.654.854.039 1.125.048 3.298.048s2.445-.009 3.299-.048c2.902-.133 4.522-1.745 4.653-4.654.039-.853.048-1.125.048-3.298z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0v24h24v-24h-24zm12 20c-.825 0-1.62-.125-2.369-.357.326-.531.813-1.402.994-2.098l.499-1.901c.261.498 1.023.918 1.833.918 2.413 0 4.151-2.219 4.151-4.976 0-2.643-2.157-4.62-4.932-4.62-3.452 0-5.286 2.317-5.286 4.841 0 1.174.625 2.634 1.624 3.1.151.07.232.039.268-.107l.222-.907c.019-.081.01-.15-.056-.23-.331-.4-.595-1.138-.595-1.825 0-1.765 1.336-3.472 3.612-3.472 1.965 0 3.341 1.339 3.341 3.255 0 2.164-1.093 3.663-2.515 3.663-.786 0-1.374-.649-1.185-1.446.226-.951.663-1.977.663-2.664 0-.614-.33-1.127-1.012-1.127-.803 0-1.448.831-1.448 1.943 0 .709.239 1.188.239 1.188s-.793 3.353-.938 3.977c-.161.691-.098 1.662-.028 2.294-2.974-1.165-5.082-4.06-5.082-7.449 0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" />
              </svg>
            </div>
            <h3>Created by Shrawn Chhetri</h3>
          </footer>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
