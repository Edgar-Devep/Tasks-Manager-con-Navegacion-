import './Styles/Todo-ul-li.css'

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
  <li className="contenedor-li">
    <span 
    title='Check'
    className={`${completed && 'icon.check--active'}`}
    onClick={onComplete}
    ><i className={`fa-solid fa-check ${completed && 'text-check--active'}`}></i></span>
    <p className={`contenedor-p ${completed && 'text-check--active'}`}>{text}</p>
    <span
    title='Delete'
    onClick={onDelete}
    ><i className="fa-solid fa-x"></i></span>
  </li>
)
};

export { TodoItem }