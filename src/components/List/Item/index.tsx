import { ITasks } from '../../../types/types'

import style from './Item.module.scss'

interface Props extends ITasks {
  selectTask: (selectTask: ITasks) => void
}

const Item = ({ id, task, time, finished, selected, selectTask }: Props) => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''} ${
        finished ? style.itemFinished : ''
      }`.trim()}
      onClick={() => {
        if (!finished) {
          selectTask({
            id,
            task,
            time,
            finished,
            selected,
          })
        }
      }}
    >
      <h3>
        {id}: {task}
      </h3>
      <span>{time}</span>
      <p>
        {String(finished)} - {String(selected)}
      </p>
      <div className={style.finished}></div>
    </li>
  )
}

export default Item
