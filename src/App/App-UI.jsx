import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { Todolist } from '../Components/Todolist';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodobutton } from '../Components/CreateTodobutton';
import { TodoLoading } from '../Components/TodoLoading';
import { TodoError } from '../Components/TodoError';
import { EmptyTasks } from '../Components/EmptyTasks';
import { useContext } from 'react';
import { TodoContext } from './TodoContex';
import { Modal } from './Modal/indel';
import { TareaFrom } from './TareaFrom';

function AppUi () {
  const {
    loading,
    error,
    searchTodo,
    completeTodo,
    deleteTodo,
    openModal
  } = useContext(TodoContext);
  return (
    <div className='Contenedor-componentes'>      
      <TodoCounter />
      <TodoSearch />

      <Todolist>
        {loading && (
          <>
            <TodoLoading /> 
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
        </>
        )} {/* Si loading es true, mostramos un mensaje de carga */}
        {error && <TodoError />} {/* Si error es true, mostramos un mensaje de error */}
        {(!loading && searchTodo.length === 0) && !error && <EmptyTasks />} {/* Si no hay tareas y no hay error, mostramos un mensaje para crear una tarea */}
        {searchTodo.map(todo => (
          <TodoItem 
          key={todo.id} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </Todolist>

      <CreateTodobutton /> 

      {openModal && (
        <Modal> 
          <TareaFrom />        
        </Modal>
      )}          
    </div>
  );
}

export { AppUi };