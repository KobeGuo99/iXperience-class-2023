import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/";

  const [posts, setPosts] = useState([]);

  // async/await
  async function fetchPosts() {
    // fetch library

    const res = await fetch(url + "posts", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setPosts(data);
    console.log(data);
  }

  async function fetchOurPosts() {
    const url = "http://localhost:3000/";
    const res = await fetch(url + "posts", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="text-center">
      <button className="btn btn-primary me-2" onClick={fetchPosts}>
        Fetch Posts
      </button>
      <button className="btn btn-secondary" onClick={fetchOurPosts}>
        Fetch Posts From our API
      </button>

      <div>
        {posts.map((x) => {
          return (
            <div key={x.id}>
              <p>title: {x.title}</p>
              <p>body: {x.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
