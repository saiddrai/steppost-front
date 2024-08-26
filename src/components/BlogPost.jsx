import React from "react";

function BlogPost({ item }) {
  return (
    <a href={`${item.url}`}>
      <div className="bg-[url('${item.feature_image}')] bg-cover w-80 h-96 p-4 rounded-lg border-purple border-dashed  border-2">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="text-sm font-body" style={{ maxWidth: "200ch" }}>
          {item.excerpt.slice(0, 200)}
          {item.excerpt.length > 200 ? "..." : ""}
        </p>
      </div>
    </a>
  );
}

export default BlogPost;
