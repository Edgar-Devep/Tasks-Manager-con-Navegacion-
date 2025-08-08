import './App.css'
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { Todolist } from './Components/Todolist';
import { TodoItem } from './Components/TodoItem';
import { CreateTodobutton } from './Components/CreateTodobutton';

function App() {

  return (
    <>
      <div className='App'>
        <TodoCounter />
        <TodoSearch />

        <Todolist>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </Todolist>

        <CreateTodobutton />
      </div>
    </>
  );
}

export default App
