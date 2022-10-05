import React, { useState } from 'react';

const Comment = (props) => {
  const { comment, idx, setComments, comments } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = ()=>{
    setIsClicked(!isClicked)
  }
  let editedComment = "";
  const handleEdit=(e)=>{
    const { value } = e.target;
    editedComment = value;
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    let newComments = comments.map((e,index)=>{
      if (index === idx) {
        e = editedComment;
      }
      return e;
    });
    setComments(newComments);
  }

  const handleDelete = ()=>{
    console.log(document.getElementById(idx))
    let newComments = comments.filter((comment,index)=>index!==idx)
    console.log(newComments)
    setComments(newComments);
  }

  return (
    <div id={idx}>
      <p>{ comment }</p>
      <button onClick={()=>handleClick()}>Editar</button>
      {
        isClicked?
        <form onSubmit={e=>handleSubmit(e)}>
          <label>Editar: </label>
          <input type="text" placeholder='nuevo valor' onChange={e=>handleEdit(e)}/>
          <button type='submit'>Enviar edición</button>
        </form>
        :
        null
      }
      <button onClick={()=>handleDelete()}>Eliminar</button>
    </div>
  );
}

export default Comment;
