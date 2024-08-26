import React, { useEffect, useState } from "react";
import Avi from "../components/Avi";
// import { blog } from "../content";
import BlogPost from "../components/BlogPost";
import axios from "axios";

function Blog({ language }) {
  const [blog, setBlog] = useState(null);

  const GHOST_API_KEY = import.meta.env.VITE_GHOST_API_KEY;
  const GHOST_API_URL = import.meta.env.VITE_GHOST_API_URL;

  useEffect(() => {
    axios.get(`${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_API_KEY}`).then((response) => {
      setBlog(response.data.posts);
    });
  }, []);
  return (
    <div>
      <h1 className="font-title font-bold text-4xl lg:text-5xl  lg:mr-44 lg:text-right px-4 lg:px-10 text-end mr-14 ">
        <span className="text-purple text-end  text-5xl lg:text-6xl">STEPPOST</span>
        <br /> BLOG
      </h1>
      <div className="flex overflow-x-auto">
        <div className="flex flex-row justify-center shrink-0 items-center space-x-8 ml-16 lg:space-y-0 py-10">
          {blog &&
            blog.map((item) => {
              return <BlogPost item={item} language={language} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
