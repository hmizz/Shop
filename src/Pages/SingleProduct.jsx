import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/posts/${id}`);

      setData(res.data);
    };
    getData();
  }, [id]);
  return (
    <div>
      {data ? (
        <>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Views: ${data.views}</p>
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default SingleProduct;
