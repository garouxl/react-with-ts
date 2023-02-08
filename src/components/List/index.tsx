import { ITasks } from '../../types/types'
import Item from './Item' 
import style from './List.module.scss'


const { listTasks, item: itemStyle } = style

const List = ({ tasks }: { tasks: ITasks[] | [] }) => {
  return (
    <aside className={listTasks}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks && tasks.map(({ id, task, time }) => (
          <Item key={id} {...{ id, task, time, itemStyle }} />
        ))}
      </ul>
    </aside>
  )
}

export default List
