import './TodoButton.css'

function CreateTodobutton({openModal, setOpenModal}) {
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