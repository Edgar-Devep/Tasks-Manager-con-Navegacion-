import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { Todolist } from '../Components/Todolist';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodobutton } from '../Components/CreateTodobutton';

function AppUi ({
loading, // indica si los datos están cargando
error,
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
        {loading && <p style={{color: 'green', fontWeight: 'bold', marginTop: '10px'}}>Estamos Cargando...</p>} {/* Si loading es true, mostramos un mensaje de carga */}
        {error && <p style={{color: 'red', fontWeight: 'bold', marginTop: '10px'}}>Desesperate hubo un error!!</p>} {/* Si error es true, mostramos un mensaje de error */}
        {(!loading && searchTodo.length === 0) && !error && <p>Crea tu primera Tarea</p>} {/* Si no hay tareas y no hay error, mostramos un mensaje para crear una tarea */}
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