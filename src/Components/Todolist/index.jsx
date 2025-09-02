import './Todo-ul.css'

function Todolist(props) {
  
  const renderFunction = props.render || props.children
  return (
    <section>
      { props.error && props.onError() } {/*si hay un error mostramos el componente de error*/}
      { props.loading && props.onLoading() } {/*si estamos cargando mostramos el componente de carga*/}

      {(!props.loading && !props.totalTodo && !props.error) && props.onEmpty()} {/*si no estamos cargando y no hay tareas y no hay error mostramos el componente de tareas vacias*/}
      {(!!props.totalTodo && !props.searchTodo.length && !props.error) && props.onEmptyResults(props.resultsText)} {/*si hay tareas pero no hay resultados de busqueda y no hay error mostramos el componente de resultados vacios utilizamos el !! para convertir a booleano el valor de totalTodo */} 

      {props.searchTodo.map(renderFunction)} {/*si hay resultados de busqueda mapeamos los resultados y los mostramos utilizando la funcion de renderizado que nos pasaron por props o los hijos del componente*/}

      <ul className="contenedor-ul">
        {props.children}
      </ul>      
    </section>
  );
};

export { Todolist }