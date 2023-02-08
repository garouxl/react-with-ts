import { ITasks } from '../types/types'
import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Chronometer from '../components/Chronometer'

import style from './App.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITasks[]>(() => [])
  const handleTasks = ({ task, time }: { task: string; time: string }) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, task, time, selected: false, finished: false },
    ])
  }

  const [selected, setSelected] = useState<ITasks>();
  const selectTask = (selectedTask: ITasks) => {
    setSelected(selectedTask)
    setTasks(
      tasks.map(task => {
        return { ...task, selected: task.id === selectedTask.id ? true : false  }
      })
    )

  }
  return (
    <div className={style.AppStyle}>
      <Form handleTasks={handleTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Chronometer selected={selected} />
    </div>
  )
}

export default App
