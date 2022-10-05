import React from 'react';

const CommentForm = (props) => {

  const { comments, setComments } = props

  let comment = "";
  const handleInput = (e) =>{
    const { value } = e.target
    console.log(value);
    comment = value;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setComments([...comments, comment]);
    comment="";
  }

  return (
    <form onSubmit={e=>handleSubmit(e)}>
      <label htmlFor='comment'>
        Ingrese su comentario:
      </label>
      <input 
        type="text" 
        placeholder='Comentario aquí'
        onChange={e=>handleInput(e)}
      />
      <button type='submit'>ENVIAR</button>
    </form>
  );
}

export default CommentForm;
