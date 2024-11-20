import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../Components/Posts";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/posts");
      setData(res.data);
    };
    getData();
  }, []);
  return <Posts data={data} />;
};

export default Home;
