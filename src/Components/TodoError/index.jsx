import './TodoError.css'
import error from '../../../public/imagenes/navegador.png'

function TodoError() {

  return (
      <div className='error-tasks'>
        <img src = { error } alt="Error Sistema icon" className='img-error'/>
        <p className='text-error'>⚠️ Error del sistema. Por favor, intente nuevamente más tarde. </p>
      </div>
    );
  };

export { TodoError }