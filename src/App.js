import logo from './logo.svg';
import './App.css';
import CommentForm from './Components/CommentForm';
import { useState } from 'react';
import Comment from './Components/Comment';

function App() {
  const [comments, setComments] = useState([]);
  return (
    <div className="App">
      <CommentForm comments={comments} setComments={setComments}/>
      {
        comments.map((comment,idx)=>{
          return <Comment comment={comment} idx={idx} setComments={setComments} comments={comments} key={idx}/>
        })
      }
    </div>
  );
}

export default App;
