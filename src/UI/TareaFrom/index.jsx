import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TareaFrom.css'

function TareaFrom({ addTodo, label, enviar }) {
  const navigate = useNavigate();
  const [newTasksValue, setnewTasksValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTasksValue) // llamamos a la función addTodo del contexto para añadir la nueva tarea
     navigate(-1)
  };

  const onChange = (event) => {
    setnewTasksValue(event.target.value);
  };

  return (
  <div className='contenedor-general'>
    <form 
      onSubmit={onSubmit}
      className="contenedor-formulario">
      <label className='title-nueva-tarea'>{label}</label>
      <textarea
      className='contenido-de-tarea'
      placeholder="Escribe..."
      value={newTasksValue}
      onChange={onChange}
      ></textarea>
    
      <div className='contenedor-button-modal'>
        <button 
        onClick={() => navigate(-1)}
        type='button'
        className="button-cancel personal-button">
          Cancelar
        </button>
        <button 
        type='submit'
        className="button-add personal-button">
          {enviar}
        </button>
      </div>
    </form>
  </div>
  )
}

export { TareaFrom };