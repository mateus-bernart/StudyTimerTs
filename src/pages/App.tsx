import { useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import { Stopwatch } from "../Components/Stopwatch";
import style from "./App.module.scss";
import { ITask } from "../Types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
