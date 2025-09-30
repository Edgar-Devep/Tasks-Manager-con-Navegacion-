import { useLocation, useParams } from "react-router-dom"
import { TareaFrom } from "../../UI/TareaFrom"
import { useTareas } from "../useTarea"

function EditarPage () {
  const location = useLocation();
  const { editTodo, getTodo, loading } = useTareas();
  const{ id } = useParams();
  
  let todoText;
  
  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
    
    return (
      <TareaFrom 
      label={'Editar Tarea'}
      enviar={'Editar'}
      defaultTodoText={todoText}
      submitAddTodo={(newTextEdit) => editTodo(id, newTextEdit)}
      />
    )
  
}

export { EditarPage }