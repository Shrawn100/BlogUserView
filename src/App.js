import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
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
            <h1>Find Your Next Getaway</h1>
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

                <button>Visit Here</button>
              </div>
            </Link>
          </div>
          <h2 className="new-section">About Us</h2>
          <div className="about-section">
            <div className="about-img"></div>
            <p className="about-desc">
              Writing and travelling, two of our favourite things.
              <br></br> Our goal is to use our passion to help inspire fellow
              travellers to find their ideal travel destinations.
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
          <Footer />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
