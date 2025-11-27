import { useState } from "react";

function AddTaskForm({ a }) {
  const [v, sv] = useState("");

  const h = () => {
    if (!v.trim()) return;
    a(v);
    sv("");
  };

  return (
    <div>
      <input value={v} onChange={(e) => sv(e.target.value)} />
      <button onClick={h}>Добавить</button>
    </div>
  );
}

export default AddTaskForm;
