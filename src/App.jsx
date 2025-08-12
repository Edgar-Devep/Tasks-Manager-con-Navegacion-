import './App.css'
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { Todolist } from './Components/Todolist';
import { TodoItem } from './Components/TodoItem';
import { CreateTodobutton } from './Components/CreateTodobutton';

function App() {

  const todoDefault = [
    { text: 'Cortar Cebolla', completed: true },
    { text: 'Terminar Curso', completed: false },
    { text: 'Ver Peliculas', completed: true },
    { text: 'Cambiar Aceite', completed: false },
];

  return (
    <div className='Contenedor-componentes'>      
      <TodoCounter completed={16} total={20}/>
      <TodoSearch />

      <Todolist>
        {todoDefault.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </Todolist>

      <CreateTodobutton />      
    </div>
  );
}

export default App
