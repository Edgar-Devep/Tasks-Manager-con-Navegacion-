import { TodoLoading } from '../TodoLoading';
import './TodoCounter.css'

function TodoCounter({ completedTodos, totalTodo, loading}) {
  
  const completarTodo = completedTodos === totalTodo && totalTodo > 0
  const sintareas = totalTodo === 0;
  return (
    <div className="contenedor-h1">
      <h1 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
        {sintareas 
        ? '📝 No tienes tareas pendientes. ¡Agrega una para comenzar!'
        : completarTodo 
          ? 'Felicidades Terminaste Todas Tus Tareas 🥳' 
          :`Tareas Completadas ${completedTodos} de ${totalTodo} 😁 `}
      </h1>
    </div>
  );
};

export { TodoCounter }
