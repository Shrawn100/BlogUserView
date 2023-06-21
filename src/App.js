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
    axios.get("http://localhost:3000/frontpage").then((response) => {
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
          <img
            className="home-page-img"
            src="https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="typewriter"
          ></img>
          <h2 className="front-page-recents">This Week's Stories</h2>
          <div className="front-page-grid">
            <div className="blog-one-grid-cell">
              <Link className="front-page-link" to={`/article/${blogOne._id}`}>
                <img
                  className="front-page-blogone-img"
                  src={blogOne.image}
                  alt={blogOne.alt}
                ></img>
                <h3 className="blog-one-heading">{blogOne.title}</h3>
                <p>{blogOne.desc}</p>
              </Link>
            </div>
            <div className="blog-two-grid-cell">
              <Link className="front-page-link" to={`/article/${blogTwo._id}`}>
                <img
                  className="front-page-blogtwo-img"
                  src={blogTwo.image}
                  alt={blogTwo.alt}
                ></img>
                <h3 className="blog-two-heading">{blogTwo.title}</h3>
                <p>{blogTwo.desc}</p>
              </Link>
            </div>
            <div className="blog-three-grid-cell">
              <Link
                className="front-page-link"
                to={`/article/${blogThree._id}`}
              >
                <img
                  className="front-page-blogthree-img"
                  src={blogThree.image}
                  alt={blogThree.alt}
                ></img>
                <h3 className="blog-three-heading">{blogThree.title}</h3>
                <p>{blogThree.desc}</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}

export default App;
