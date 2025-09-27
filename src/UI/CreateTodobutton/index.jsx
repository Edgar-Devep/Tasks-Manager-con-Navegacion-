import './TodoButton.css'

function CreateTodobutton({ onClick }) {
  return (
    <div className='general-button'>
      <button 

      title='Agregar Tarea'
      className="contenedor-button"
      onClick={ onClick }
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export { CreateTodobutton }