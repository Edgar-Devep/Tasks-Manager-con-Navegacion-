import './App.css'
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { Todolist } from './Components/Todolist';
import { TodoItem } from './Components/TodoItem';
import { CreateTodobutton } from './Components/CreateTodobutton';
import { useState } from 'react';

// const todoDefault = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Terminar Curso', completed: false },
//   { text: 'Ver Peliculas', completed: true },
//   { text: 'Cambiar Aceite', completed: false },
// ];

//  localStorage.setItem('TAREAS_V1', JSON.stringify(todoDefault));


function App() {

  const localStorageTodos = localStorage.getItem('TAREAS_V1');// obtenemos el valor de localStorage con la clave 'TAREAS_V1' que es donde guardamos los todos
  let parsedTodos;// declaramos una variable para guardar los todos parseados desde el localStorage

  if(!localStorageTodos) { // si no hay nada en localStorage con la clave 'TAREAS_V1' significa que es la primera vez que se carga la aplicación
    // entonces inicializamos el localStorage con un array vacío y asignamos parsedTodos a un array vacío para actualizar localStorage y el estado de los todos
    localStorage.setItem('TAREAS_V1', JSON.stringify([])); // usamos JSON.stringify para convertir el array vacío a un string y guardarlo en localStorage
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos); // si ya hay algo en localStorage con la clave 'TAREAS_V1' lo parseamos a un array de objetos
  }

  const [stateSearch, setStateSearch] = useState(''); // podemos declarar estados en el padre para que los hijos puedan acceder a ellos
  const [todos, setTodos] = useState(parsedTodos); // usamos useState para declarar el estado de los todos, inicializándolo con los todos parseados desde localStorage

  const completedTodos = todos.filter(todo => !! todo.completed).length // !! convierte el valor a booleano en caso de que sea un string o un number
  const totalTodo = todos.length // estos son estados derivados, no son estados que se declaran con useState, sino que se derivan de otros estados por ejemplo, no se crea un useState nuevo se utiliza el que ya existe

  const searchTodo = todos.filter(todo => {  // filtramos los todos para que solo se muestren los que coincidan con el texto de búsqueda
    const todoText = todo.text.toLowerCase() // convertimos el texto a minúsculas para que la búsqueda no sea sensible a mayúsculas y minúsculas
    const searchText = stateSearch.toLowerCase()// convertimos el texto de búsqueda a minúsculas
    return todoText.includes(searchText)// verificamos si el texto del todo esta incluido en el texto de búsqueda
  })

  const saveTodos = (newTodos) => { // función para guardar loos nuevos todos en el localStorage y actualizar el estado
    // usamos JSON.stringify para convertir el array de objetos a un string antes de guardarlo en localStorage
    // esto es necesario porque localStorage solo puede guardar strings
    // y usamos setTodos para actualizar el estado de los todos en la aplicación
    localStorage.setItem('TAREAS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

   const completeTodo = (text) => { // se le pasa el texto del todo que se quiere completar o descompletar
    const newTodos = [...todos]; // se crea una copia del estado actual de los todos
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text === text // buscamos el índice del todo que coincide con el texto pasado
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // se cambia el estado de completado del todo encontrado si es true se cambia a false y viceversa
    saveTodos(newTodos); // se llama a la función saveTodos para guardar los nuevos todos en el localStorage y actualizar el estado
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1); // eliminamos el todo encontrado en el índice especificado
    saveTodos(newTodos);
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
