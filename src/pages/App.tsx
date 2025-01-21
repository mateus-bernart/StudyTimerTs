import { useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import { Stopwatch } from "../Components/Stopwatch";
import style from "./App.module.scss";
import { ITask } from "../Types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List selectTask={selectTask} tasks={tasks} />
      <Stopwatch selected={selected} />
    </div>
  );
}

export default App;
