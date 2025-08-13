import './Styles/TodoSearch.css'

function TodoSearch({ stateSearch, setStateSearch}) {

  return (
  <input 
  title='Nueva Tarea'
  type='search'
  value={stateSearch}
  className='contenedor-input'
  placeholder="Cortar Cebolla" 
  onChange={(event) => setStateSearch(event.target.value)}
  />
  );
};

export { TodoSearch }