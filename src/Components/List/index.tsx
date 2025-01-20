import style from "./List.module.scss";

function List() {
  const tasks = [
    {
      task: "React",
      time: "01:00:00",
    },
    {
      task: "TypeScript",
      time: "02:00:00",
    },
    {
      task: "Vue",
      time: "03:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index} className={style.item}>
              <h3>{task.task}</h3>
              <span>{task.time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default List;
