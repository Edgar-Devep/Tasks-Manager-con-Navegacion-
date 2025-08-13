import './App.css'
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { Todolist } from './Components/Todolist';
import { TodoItem } from './Components/TodoItem';
import { CreateTodobutton } from './Components/CreateTodobutton';
import { useState } from 'react';

const todoDefault = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Terminar Curso', completed: false },
  { text: 'Ver Peliculas', completed: true },
  { text: 'Cambiar Aceite', completed: false },
];

function App() {

  const [stateSearch, setStateSearch] = useState(''); // podemos declarar estados en el padre para que los hijos puedan acceder a ellos
  const [todos, setTodos] = useState(todoDefault);

  console.log('Escribiste', stateSearch);

  const completedTodos = todos.filter(todo => !! todo.completed).length // !! convierte el valor a booleano en caso de que sea un string o un number
  const totalTodo = todos.length // estos son estados derivados, no son estados que se declaran con useState, sino que se derivan de otros estados por ejemplo, no se crea un useState nuevo se utiliza el que ya existe

  const searchTodo = todos.filter(todo => {  // filtramos los todos para que solo se muestren los que coincidan con el texto de búsqueda
    const todoText = todo.text.toLowerCase() // convertimos el texto a minúsculas para que la búsqueda no sea sensible a mayúsculas y minúsculas
    const searchText = stateSearch.toLowerCase()// convertimos el texto de búsqueda a minúsculas
    return todoText.includes(searchText)// verificamos si el texto del todo esta incluido en el texto de búsqueda
  })

   const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <div className='Contenedor-componentes'>      
      <TodoCounter completed={completedTodos} total={totalTodo}/>
      <TodoSearch 
      stateSearch = {stateSearch}
      setStateSearch = {setStateSearch}
      />

      <Todolist>
        {searchTodo.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </Todolist>

      <CreateTodobutton />      
    </div>
  );
}

export default App
