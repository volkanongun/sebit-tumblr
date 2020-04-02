import React, {useState} from 'react';
import './App.scss'; 
import data from "./data.json";
import Post from "./components/Post";

function App() {

  const [dataState, setDataState] = useState({
    posts : data.posts
  })

  console.log(data.posts);
  
  const handleClick = function (e) {
    e.preventDefault();

    setDataState(data)
  }

  const parentCallback = function(data){
    setDataState({
      posts : data
    })
  }

  return (
    <div className="App">
      <div className="container">
        <section className="jumbotron text-center">
          <div>
            <h1><a href="/" onClick={handleClick}>Sebit Tumblr Demo</a></h1>
            <h2>({data['posts-total']} posts)</h2>
          </div>
        </section>
        <div>
          {dataState.posts.map(function(elem,i){
            return <Post post={elem} callbackFunc={parentCallback} posts={data.posts} title={elem["regular-title"]} id={elem.id} key={elem.id} type={elem.type}></Post>
          })}
        </div>
        <footer> Powered by React ® </footer>
      </div>
    </div>
  );
}

export default App;
