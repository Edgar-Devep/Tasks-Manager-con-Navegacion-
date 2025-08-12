import './Styles/Todo-ul-li.css'

function TodoItem({ text, completed }) {
  return (
  <li className="contenedor-li">
    <span><i class="fa-solid fa-check"></i></span>
    <p>{text}</p>
    <span><i class="fa-solid fa-x"></i></span>
  </li>
)
};

export { TodoItem }