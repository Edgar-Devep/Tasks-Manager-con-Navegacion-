import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { Todolist } from '../Components/Todolist';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodobutton } from '../Components/CreateTodobutton';

function AppUi ({
completedTodos,
totalTodo,
stateSearch,
setStateSearch,
searchTodo,
completeTodo,
deleteTodo
}) {
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

export { AppUi };