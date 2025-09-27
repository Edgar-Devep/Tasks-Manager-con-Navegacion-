import { TareaFrom } from "../../UI/TareaFrom"
import { useTareas } from "../useTarea"

function EditarPage () {
  const { editTodo  } = useTareas()
  return (
    <TareaFrom 
    label={'Editar Tarea'}
    enviar={'Editar'}
    editTodo={editTodo}
    />
  )
}

export { EditarPage }