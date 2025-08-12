import './Styles/TodoButton.css'

function CreateTodobutton() {
  return (
    <div className='general-button'>
      <button className="contenedor-button">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export { CreateTodobutton }