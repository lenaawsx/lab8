import "./styles.css";
import { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import ToDoList from "./ToDoList";

function App() {
  const [t, st] = useState(() => {
    // Читаем задачи из localStorage при инициализации состояния
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // при каждом изменении t — сохраняем в localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(t));
  }, [t]);

  const a = (x) => {
    st([...t, { id: Date.now(), text: x }]);
  };

  const r = (id) => {
    st(t.filter((i) => i.id !== id));
  };

  return (
    <div>
      <h1>Мои задачи</h1>
      <AddTaskForm a={a} />
      <ToDoList t={t} r={r} />
    </div>
  );
}

export default App;
