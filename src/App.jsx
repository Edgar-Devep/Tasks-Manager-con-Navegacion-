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


function useLocalStorageItem(itemName, inicialValue) { // Se crea un hook personalizado para manejar el localStorage
  // este hook recibe dos parámetros, el nombre del item en el localStorage y el valor inicial que se le quiere asignar si no existe el item en el localStorage

  const localStorageItem = localStorage.getItem(itemName);// obtenemos el valor de localStorage con la clave 'TAREAS_V1' que es donde guardamos los todos
  let parsedItem;// declaramos una variable para guardar los todos parseados desde el localStorage

  if(!localStorageItem) { // si no hay nada en localStorage con la clave 'TAREAS_V1' significa que es la primera vez que se carga la aplicación
    // entonces inicializamos el localStorage con un array vacío y asignamos parsedItem a un array vacío para actualizar localStorage y el estado de los todos
    localStorage.setItem(itemName, JSON.stringify(inicialValue)); // usamos JSON.stringify para convertir el array vacío a un string y guardarlo en localStorage
    parsedItem = inicialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem); // si ya hay algo en localStorage con la clave 'TAREAS_V1' lo parseamos a un array de objetos
  }

  const [item, setItem] = useState(parsedItem) // inicializamos el estado de los todos con los todos parseados desde localStorage

  const saveItem = (newItem) => { // función para guardar loos nuevos todos en el localStorage y actualizar el estado
    // usamos JSON.stringify para convertir el array de objetos a un string antes de guardarlo en localStorage
    // esto es necesario porque localStorage solo puede guardar strings
    // y usamos setTodos para actualizar el estado de los todos en la aplicación
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item , saveItem] // retornamos un array con el estado de los todos y la función para guardarlos
  // de esta manera podemos usar este hook en cualquier componente de la aplicación para manejar el localStorage de los todos
}

function App() {

  const [todos, saveItem] = useLocalStorageItem('TAREAS_V1', []); // usamos useState para declarar el estado de los todos, inicializándolo con los todos parseados desde localStorage
  const [stateSearch, setStateSearch] = useState(''); // podemos declarar estados en el padre para que los hijos puedan acceder a ellos

  const completedTodos = todos.filter(todo => !! todo.completed).length // !! convierte el valor a booleano en caso de que sea un string o un number
  const totalTodo = todos.length // estos son estados derivados, no son estados que se declaran con useState, sino que se derivan de otros estados por ejemplo, no se crea un useState nuevo se utiliza el que ya existe

  const searchTodo = todos.filter(todo => {  // filtramos los todos para que solo se muestren los que coincidan con el texto de búsqueda
    const todoText = todo.text.toLowerCase() // convertimos el texto a minúsculas para que la búsqueda no sea sensible a mayúsculas y minúsculas
    const searchText = stateSearch.toLowerCase()// convertimos el texto de búsqueda a minúsculas
    return todoText.includes(searchText)// verificamos si el texto del todo esta incluido en el texto de búsqueda

  });  

   const completeTodo = (text) => { // se le pasa el texto del todo que se quiere completar o descompletar
    const newItem = [...todos]; // se crea una copia del estado actual de los todos
    const todoIndex = newItem.findIndex( 
      (todo) => todo.text === text // buscamos el índice del todo que coincide con el texto pasado
    );
    newItem[todoIndex].completed = !newItem[todoIndex].completed; // se cambia el estado de completado del todo encontrado si es true se cambia a false y viceversa
    saveItem(newItem); // se llama a la función saveItem para guardar los nuevos todos en el localStorage y actualizar el estado
  };

  const deleteTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text == text
    );
    newItem.splice(todoIndex, 1); // eliminamos el todo encontrado en el índice especificado
    saveItem(newItem);
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
