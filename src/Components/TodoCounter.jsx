function TodoCounter({ total, completed }) {
  const completarTodo = completed === total && total > 0
  const sintareas = total === 0;
  return (
    <div className="contenedor-h1">
      <h1>
        {sintareas 
        ? '📝 No tienes tareas pendientes. ¡Agrega una para comenzar!'
        : completarTodo 
          ? 'Felicidades Terminaste Todas Tus Tareas 😁' 
          :`Has completado ${completed} de ${total} Tareas `}
      </h1>
    </div>
  );
};

export { TodoCounter }
