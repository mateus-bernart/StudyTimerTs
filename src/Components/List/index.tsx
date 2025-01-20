import { ITask } from "../../Types/task";
import Item from "./Item";
import style from "./List.module.scss";

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item, index) => {
          return <Item {...item} key={index} />;
        })}
      </ul>
    </aside>
  );
}

export default List;
