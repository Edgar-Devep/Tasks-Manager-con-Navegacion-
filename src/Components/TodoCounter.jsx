function TodoCounter({ total, completed }) {
  return (
    <div className="contenedor-h1">
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    </div>
  );
};

export { TodoCounter }
