function Todolist(props) {
  return (
    <ul>
      {props.children}
    </ul>
  );
};

export { Todolist }