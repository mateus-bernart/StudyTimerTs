import Button from "../Button";
import { Watch } from "./Watch";
import style from "./Stopwatch.module.scss";
import { ITask } from "../../Types/task";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props {
  selected: ITask | undefined;
  endTask: () => void;
}

export function Stopwatch({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time));
    }
  }, [selected]);

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the stopwatch!</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Start!</Button>
    </div>
  );
}
