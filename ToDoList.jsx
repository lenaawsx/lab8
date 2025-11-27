import ToDoItem from "./ToDoItem";

function ToDoList({ t, r }) {
  return (
    <ul>
      {t.map((i) => (
        <ToDoItem key={i.id} i={i} r={r} />
      ))}
    </ul>
  );
}

export default ToDoList;
