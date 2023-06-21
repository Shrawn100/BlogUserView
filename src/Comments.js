import { useState } from "react";
import axios from "axios";

function Comments({ blog, comments, setNewComment, newComment }) {
  const [allComments, setAllComments] = useState(null);
  const [allStatus, setAllStatus] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLoad = async (e) => {
    const response = await axios.get(
      `http://localhost:3000/article/${blog}/all-comments`
    );
    setAllComments(response.data.comments);
    setAllStatus(true);
  };

  const handleHide = () => {
    setAllStatus(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3000/article/${blog}/comment`, {
      name: name,
      content: message,
    });
    setSuccessMsg("Comment sent successfully");
    setName("");
    setMessage("");
    setNewComment(!newComment);
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <h2 className="comments-heading">Leave a Comment!</h2>
      <p className="comments-success">{successMsg}</p>
      <form onSubmit={handleSubmit} className="comments-form">
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSuccessMsg("");
          }}
          id="name"
          name="name"
          required
          placeholder="John Doe"
        ></input>

        <label htmlFor="comment">Comment:</label>
        <textarea
          placeholder="I love this article"
          id="comment"
          name="comment"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setSuccessMsg("");
          }}
          rows="5"
          cols="60"
          required
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <h2 className="comments-heading comments-h">Comments:</h2>

      {allStatus ? (
        <div className="comments-container">
          <button className="load-btn" onClick={handleHide}>
            Reduce comments
          </button>
          {allComments.length === 0 ? (
            <p>There are no comments</p>
          ) : (
            <ul className="comments-list">
              {allComments.map((comment) => (
                <li key={comment.id}>
                  <h3>{comment.name}</h3>
                  <p>{comment.content}</p>
                  <p>{formatDate(comment.date)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="comments-container">
          <button className="load-btn" onClick={handleLoad}>
            Load all comments
          </button>
          {comments.length === 0 ? (
            <p>There are no comments</p>
          ) : (
            <ul className="comments-list">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <h3>{comment.name}</h3>
                  <p>{comment.content}</p>
                  <p>{formatDate(comment.date)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default Comments;
