import { useState } from "react";
import axios from "axios";

function Comments({ blog, comments, setNewComment, newComment }) {
  const [allComments, setAllComments] = useState(null);
  const [allStatus, setAllStatus] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `https://blogapi-production-9a30.up.railway.app/article/${blog}/comment`,
      {
        name: name,
        content: message,
      }
    );
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
    <div className="comments-section-container">
      <p className="comments-success">{successMsg}</p>
      <form onSubmit={handleSubmit} className="comments-form">
        <label htmlFor="comment">Write a comment</label>
        <textarea
          placeholder="I love this article"
          id="comment"
          name="comment"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setSuccessMsg("");
          }}
          rows="1"
          cols="60"
          required
        ></textarea>
        <label htmlFor="name">Your name</label>
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

        <button>Submit</button>
      </form>

      <h2 className="comments-heading comments-h">Comments:</h2>

      {comments.length === 0 ? (
        <p>There are no comments</p>
      ) : (
        <ul className="comments-list">
          {comments.map((comment) => (
            <li className="comment-list-item" key={comment.id}>
              <h3>{comment.name}</h3>
              <p className="comment-list-item-content">{comment.content}</p>
              <p className="comment-list-item-date">
                {formatDate(comment.date)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Comments;
