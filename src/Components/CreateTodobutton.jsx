import './Styles/TodoButton.css'

function CreateTodobutton() {
  return (
    <div className='general-button'>
      <button 
      title='Agregar'
      className="contenedor-button"
      onClick={() => console.log('Me estas llamando?')}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export { CreateTodobutton }