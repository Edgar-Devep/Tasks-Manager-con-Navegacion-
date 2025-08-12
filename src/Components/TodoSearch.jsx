import { useState } from 'react';
import './Styles/TodoSearch.css'

function TodoSearch() {
  const [stateSearch, setStateSearch] = useState('')

  console.log('Escribiste', stateSearch);
  
  return (
  <input 
  type='search'
  value={stateSearch}
  className='contenedor-input'
  placeholder="Cortar Cebolla" 
  onChange={(event) => setStateSearch(event.target.value)}
  />
  );
};

export { TodoSearch }