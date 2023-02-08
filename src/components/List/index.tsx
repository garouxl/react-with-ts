import { useState } from 'react'
import Item from './Item'
import style from './List.module.scss'

const { listTasks, item: itemStyle } = style

const data = [
  {
    id: 1,
    task: 'React',
    time: '02:00:00',
  },
  {
    id: 2,
    task: 'Javascript',
    time: '01:00:00',
  },
]

const List = () => {
  const [tasks, setTasks] = useState(() => data)
  const handleClick = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, task: 'nova', time: '04:00:00' },
    ])
  }

  return (
    <aside className={listTasks}>
      <h2 onClick={handleClick}> Estudos do dia </h2>
      <ul>
        {tasks.map(({ id, task, time }) => (
          <Item key={id} {...{ task, time, itemStyle }} />
        ))}
      </ul>
    </aside>
  )
}

export default List
