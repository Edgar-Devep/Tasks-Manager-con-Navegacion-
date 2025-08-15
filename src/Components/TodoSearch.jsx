import './Styles/TodoSearch.css'

function TodoSearch({ stateSearch, setStateSearch}) {

  return (
    <div className='contenedor-input'>
      <input 
      title='Nueva Tarea'
      type='search'
      value={stateSearch}
      className= 'text-input'
      placeholder= 'Escribe Nuevas Tareas...'
      onChange={(event) => setStateSearch(event.target.value)}
      />
      {stateSearch && ( // aqui se esta validando si stateSearch tiene algun valor, si es asi se muestra el boton de limpiar sino queda en null
        <button
          title='Clear'
          className='btn-clear' 
          onClick={() => setStateSearch('')}> 
          <i className="fa-solid fa-x"></i>
        </button>
      )}      
    </div>
  );
};

export { TodoSearch }