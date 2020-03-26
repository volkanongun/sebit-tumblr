import React from 'react';
import logo from './logo.svg';
import './App.scss'; 
import data from "./data.json";
import Post from "./components/Post";

function App() {

  console.log(data.posts, " ∆")
  console.log(data['posts-total'], " ∆")

  return (
    <div className="App">
      <div className="container">
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Sebit Tumblr Demo</h1>
          </div>
        </section>
        <div>
          {data.posts.map(function(elem,i){
            return <Post title={elem["regular-title"]} id={elem.id} key={elem.id} type={elem.type}></Post>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
