import { useState } from 'react';
import './TareaFrom.css'

function TareaFrom({addTodo, setOpenModal}) {
  const [newTasksValue, setnewTasksValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTasksValue) // llamamos a la función addTodo del contexto para añadir la nueva tarea
    setOpenModal(false)
  };

  const onChange = (event) => {
    setnewTasksValue(event.target.value);
  };

  return (
  <>
    <form 
      onSubmit={onSubmit}
      className="contenedor-formulario">
      <label className='title-nueva-tarea'>Escribe tu nueva Tarea</label>
      <textarea
      className='contenido-de-tarea'
      placeholder="Escribe..."
      value={newTasksValue}
      onChange={onChange}
      ></textarea>
    
      <div className='contenedor-button-modal'>
        <button 
        onClick={() => setOpenModal(false)}
        type='button'
        className="button-cancel personal-button">
          Cancelar
        </button>
        <button 
        type='submit'
        className="button-add personal-button">
          Añadir
        </button>
      </div>
    </form>
  </>
  )
}

export { TareaFrom };