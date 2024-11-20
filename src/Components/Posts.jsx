import React from "react";
import Post from "./Post";

const Posts = ({ data, setCount, count }) => {
  return (
    <div className="grid grid-cols-3">
      {data?.map((v) => (
        <Post key={v.id} v={v} setCount={setCount} count={count} />
      ))}
    </div>
  );
};

export default Posts;
