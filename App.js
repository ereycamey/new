import { useState } from "react";


export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post title 1", text: "Post text " },
    { id: 2, title: "Post title 2", text: "Post text 2" }
  ]);
  const [post, setPost] = useState({ title: "", text: "" });
  const addNewPost = () => {
    setPosts([...posts, { ...post, id: Math.floor(Math.random() * 9999) }]);
    setPost({ title: "", text: "" });
  };
  return (
    <>
      <h1>Posts</h1>
      <h3>Add new post</h3>
      <input
        type="text"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
      />
      <br />
      <input
        type="text"
        onChange={(e) => setPost({ ...post, text: e.target.value })}
        value={post.text}
      />
      <br />
      <button onClick={() => addNewPost()}>Add</button>
      {posts.map((post, v) => {
        return (
          <div
            key={post.id}
            style={{
              border: "1px solid red",
              width: 400,
              padding: "0 10px",
              marginTop: 5
            }}
          >
            <h4>
              {v + 1}. {post.title}
            </h4>
            <p>{post.text}</p>
          </div>
        );
      })}
    </>
  );
}
