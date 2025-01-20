import Button from "../Button";
import { Watch } from "./Watch";
import style from "./Stopwatch.module.scss";

export function Stopwatch() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the stopwatch!</p>
      <div className={style.relogioWrapper}>
        <Watch></Watch>
      </div>
      <Button>Start!</Button>
    </div>
  );
}
