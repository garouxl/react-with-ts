import { ITasks } from '../../types/types'
import Item from './Item'
import style from './List.module.scss'

interface Props {
  tasks: ITasks[],
  selectTask: (selectTask: ITasks) => void
}

const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={style.listTasks}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <Item
              key={task.id}
              selectTask={selectTask}
              {...task}
            />
          ))}
      </ul>
    </aside>
  )
}

export default List
