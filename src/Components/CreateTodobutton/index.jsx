import './TodoButton.css'
import { useContext } from 'react';
import { TodoContext } from '../../App/TodoContex';

function CreateTodobutton() {
  const {
    openModal,
    setOpenModal
  } = useContext(TodoContext);
  return (
    <div className='general-button'>
      <button 

      title='Agregar Tarea'
      className="contenedor-button"
      onClick={() => setOpenModal(!openModal)}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export { CreateTodobutton }