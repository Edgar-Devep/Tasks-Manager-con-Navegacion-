import './EmptyTasks.css'
import emptyTasks from '../../../public/imagenes/tarea.png'

function EmptyTasks() {

  return (
    <div className='empty-tasks'>
      <img src = { emptyTasks } alt="Tarea Vacia"  className='img-vacia'/>
      <p className='text-vacio'>Escribe una Tarea 😜</p>
    </div>
  );
};

export { EmptyTasks }