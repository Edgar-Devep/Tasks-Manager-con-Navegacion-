import './Todoitem.css'

function TodoItem({ text, completed, onComplete, onDelete, onEdit }) {
  return (
  <li className={`contenedor-li ${completed && 'contenedor-li--click'}`}>
    <span 
    title='Check'
    className={`${completed && 'icon.check--active'}`}
    onClick={onComplete}
    ><i className={`fa-solid fa-check ${completed && 'text-check--active'}`}></i></span>

    <p className={`contenedor-p ${completed && 'text-check--active'}`}>{text}</p>

    <span
    title='Edit'
    onClick={onEdit}
    ><i className={`fa-solid fa-pen-to-square`}></i></span>

    <span
    title='Delete'
    onClick={onDelete}
    ><i className="fa-solid fa-x"></i></span>
  </li>
)
};

export { TodoItem }