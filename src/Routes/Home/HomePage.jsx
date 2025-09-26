import '../../App.css'
import { TodoCounter } from '../../UI/TodoCounter';
import { TodoSearch } from '../../UI/TodoSearch';
import { Todolist } from '../../UI/Todolist';
import { TodoItem } from '../../UI/TodoItem';
import { CreateTodobutton } from '../../UI/CreateTodobutton';
import { TodoLoading } from '../../UI/TodoLoading';
import { TodoError } from '../../UI/TodoError';
import { EmptyTasks } from '../../UI/EmptyTasks';
import { Modal } from '../../App/Modal/index';
import { TareaFrom } from '../../UI/TareaFrom';
import { TodoHeader } from '../../UI/TodoHeader';
import { useTareas } from '../useTarea';
import { EmptyTasksResults } from '@UI/EmptyTasksResults';


function HomePage() {  
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
      <TodoHeader loading={loading}>
        <TodoCounter 
        completedTodos={completedTodos} 
        totalTodo={totalTodo}/>

        <TodoSearch  
        stateSearch={stateSearch} 
        setStateSearch={setStateSearch}/> 
             
      </TodoHeader>     

      <Todolist 
      error={error}
      loading={loading}
      searchTodo={searchTodo}
      totalTodo={totalTodo}
      resultsText={stateSearch}
      onError={() => <TodoError />}
      onLoading={() =>
        <>
        {[...Array(6)].map((_,i) => <TodoLoading key={i}/>)} {/*aqui estamos creando 6 elementos de carga utilizando el metodo array y map primero creamos un array con 6 elementos vacios y luego los mapeamos para crear 6 componentes de carga se les asigna una key unica con el indice del map*/}
       
        </>}
      onEmpty={() => <EmptyTasks />}
      onEmptyResults={(resultsText) => <EmptyTasksResults resultsText={resultsText}/>}
      render={todo => (
          <TodoItem 
          key={todo.id} 
          text={todo.text}
          completed={todo.completed}
          onEdit={() => console.log('tratas de editar')}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          />
        )}      
      >
        {/* {todo => (
          <TodoItem 
          key={todo.id} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          />
        )} */}

      </Todolist>

      {/* <Todolist>
        {loading && (
          <>
            <TodoLoading /> 
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
        </>
        )} {/* Si loading es true, mostramos un mensaje de carga */}
        {/* {error && <TodoError />} Si error es true, mostramos un mensaje de error */}
        {/* {(!loading && searchTodo.length === 0) && !error && <EmptyTasks />} Si no hay tareas y no hay error, mostramos un mensaje para crear una tarea */}
        {/* {searchTodo.map(todo => (
          <TodoItem 
          key={todo.id} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </Todolist> */}

      <CreateTodobutton openModal={openModal} setOpenModal={setOpenModal} /> 

      {openModal && (
        <Modal> 
          <TareaFrom addTodo={addTodo} setOpenModal={setOpenModal}/>        
        </Modal>
      )}          
    </div>
  );
}

export { HomePage };
