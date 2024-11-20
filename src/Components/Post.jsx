import { data } from "autoprefixer";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Post = ({ v, count, setCount }) => {
  const { title, views, id } = v;
  const deleteFn = async () => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    setCount(count - 1);
  };
  return (
    <div>
      <div className="flex justify-between">
        <Link to={`/SingleProduct/${id}`}>Details</Link>
        <button onClick={deleteFn}> x </button>
      </div>
      <h1>{v.title}</h1>
      <p>{v.views}</p>
    </div>
  );
};

export default Post;
