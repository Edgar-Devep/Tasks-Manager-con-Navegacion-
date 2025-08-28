import '../App.css'
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { Todolist } from '../Components/Todolist';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodobutton } from '../Components/CreateTodobutton';
import { TodoLoading } from '../Components/TodoLoading';
import { TodoError } from '../Components/TodoError';
import { EmptyTasks } from '../Components/EmptyTasks';
import { Modal } from './Modal/indel';
import { TareaFrom } from './TareaFrom';
import { TodoHeader } from '../Components/TodoHeader';
import { useTareas } from './useTarea';


function App() {  
  const {
    loading,
    error,
    searchTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodo,
    stateSearch,
    setStateSearch,
    addTodo,
  } = useTareas();
  return (
    <div className='Contenedor-componentes'> 
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodo={totalTodo}/>
        <TodoSearch  stateSearch={stateSearch} setStateSearch={setStateSearch}/>      
      </TodoHeader>     

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

      <CreateTodobutton openModal={openModal} setOpenModal={setOpenModal} /> 

      {openModal && (
        <Modal> 
          <TareaFrom addTodo={addTodo} setOpenModal={setOpenModal}/>        
        </Modal>
      )}          
    </div>
  );
}

export default App
