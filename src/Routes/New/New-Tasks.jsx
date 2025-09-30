import { TareaFrom } from "../../UI/TareaFrom"
import { useTareas } from "../useTarea"

function NewPage () {
  const { addTodo  } = useTareas()
  return (
    <TareaFrom 
    label={'Escribe tu Nueva Tarea'}
    enviar={'Añadir'}
    submitAddTodo={(newText) => addTodo(newText)} />
  )
}

export { NewPage }