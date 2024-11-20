import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [inputs, setInputs] = useState({
    title: "",
    views: 0,
  });
  console.log(inputs);
  const postFn = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/posts", inputs);
    setInputs({
      title: "",
      price: 0,
    });
  };
  return (
    <form onSubmit={postFn} className="w-96 border border-solid rounded-md p-4">
      <div className="flex flex-col items-start">
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="">Views</label>
        <input
          type="number"
          placeholder="views"
          name="views"
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </div>
      <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Send
      </button>
    </form>
  );
};

export default Form;
