import './Styles/Todo-ul-li.css'

function Todolist({ children }) {
  return (
    <ul className="contenedor-ul">
      {children}
    </ul>
  );
};

export { Todolist }