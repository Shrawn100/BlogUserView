import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogView from "./BlogView";
import Comments from "./Comments";
import Navbar from "./Navbar";
function Blog() {
  const { id } = useParams();
  const [responseData, setResponseData] = useState(null);
  const [content, setContent] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/article/${id}`);
      setResponseData(response.data);

      setTitle(response.data.blog.title);
      setDesc(response.data.blog.desc);
      setComments(response.data.comments);
      setContent(response.data.blog.content.split("%!P"));
      setDate(response.data.blog.date);
      setImgUrl(response.data.blog.image);
      setAlt(response.data.blog.alt);
      setAuthorName(response.data.blog.author.name);
    };
    fetchData();
  }, [id, newComment]);

  return (
    <div>
      <Navbar></Navbar>
      {responseData ? (
        <>
          <BlogView
            date={date}
            alt={alt}
            desc={desc}
            imgUrl={imgUrl}
            title={title}
            content={content}
            author={authorName}
          />
          <Comments
            newComment={newComment}
            setNewComment={setNewComment}
            blog={id}
            comments={comments}
            name={name}
            setName={setName}
            message={message}
            setMessage={setMessage}
            successMsg={successMsg}
            setSuccessMsg={setSuccessMsg}
          />
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
export default Blog;
