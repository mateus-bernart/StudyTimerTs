import Button from "../Button";
import { Watch } from "./Watch";
import style from "./Stopwatch.module.scss";
import { ITask } from "../../Types/task";
import { useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props {
  selected: ITask | undefined;
}

export function Stopwatch({ selected }: Props) {
  const [time, setTime] = useState<number>();

  if (selected?.time) {
    setTime(timeToSeconds(selected.time));
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the stopwatch!</p>
      Time: {time}
      <div className={style.relogioWrapper}>
        <Watch></Watch>
      </div>
      <Button>Start!</Button>
    </div>
  );
}
