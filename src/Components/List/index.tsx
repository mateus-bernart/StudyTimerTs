import { ITask } from "../../Types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item) => {
          return <Item selectTask={selectTask} {...item} key={item.id} />;
        })}
      </ul>
    </aside>
  );
}

export default List;
