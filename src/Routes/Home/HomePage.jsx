import '../../App.css'
import { useNavigate } from 'react-router-dom';
import { TodoCounter } from '../../UI/TodoCounter';
import { TodoSearch } from '../../UI/TodoSearch';
import { Todolist } from '../../UI/Todolist';
import { TodoItem } from '../../UI/TodoItem';
import { CreateTodobutton } from '../../UI/CreateTodobutton';
import { TodoLoading } from '../../UI/TodoLoading';
import { TodoError } from '../../UI/TodoError';
import { EmptyTasks } from '../../UI/EmptyTasks';
import { EmptyTasksResults } from '@UI/EmptyTasksResults';
import { TodoHeader } from '../../UI/TodoHeader';
import { useTareas } from '../useTarea';


function HomePage() {  
  const navigate = useNavigate()

  const {
    loading,
    error,
    searchTodo,
    completeTodo,
    deleteTodo,
    completedTodos,
    totalTodo,
    stateSearch,
    setStateSearch,
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
          onEdit={() =>  navigate(`/edit/${todo.id}`, { state: { todo } })}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          />
        )}
        >

      </Todolist>

      <CreateTodobutton 
      onClick={() => navigate('/new')}
      />
    </div>
  );
}

export { HomePage };
