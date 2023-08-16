import moment from "moment";
import { marked } from "marked";
function BlogView({ title, desc, date, imgUrl, content, alt, author }) {
  const formattedDate = moment(date).format("MMMM Do, YYYY");

  return (
    <div className="blog-container">
      <h1 className="blog-title">{title}</h1>
      <h2 className="blog-author">Written by: {author}</h2>
      <p className="blog-date">{formattedDate}</p>
      <img className="blog-image" src={imgUrl} alt={alt} />
      <div
        className="blog-content-container"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </div>
  );
}

export default BlogView;
