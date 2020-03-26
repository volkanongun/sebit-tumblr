import React from 'react';
import './App.scss'; 
import data from "./data.json";
import Post from "./components/Post";

function App() {

  console.log(data.posts, " ∆")

  return (
    <div className="App">
      <div className="container">
        <section className="jumbotron text-center">
          <div>
            <h1>Sebit Tumblr Demo</h1>
            <h2>({data['posts-total']} posts)</h2>
          </div>
        </section>
        <div>
          {data.posts.map(function(elem,i){
            return <Post post={elem} title={elem["regular-title"]} id={elem.id} key={elem.id} type={elem.type}></Post>
          })}
        </div>
        <footer> Powered by React ® </footer>
      </div>
    </div>
  );
}

export default App;
