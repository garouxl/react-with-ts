import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Chronometer from '../components/Chronometer'

import style from './App.module.scss'
import { ITasks } from '../types/types'

function App() {
  const [tasks, setTasks] = useState<ITasks[]>(() => [])
  const handleTasks = ({ task, time }: { task: string; time: string }) => {
    setTasks([...tasks, { id: tasks.length + 1, task, time }])
  }

  return (
    <div className={style.AppStyle}>
      <Form handleTasks={handleTasks} />
      <List tasks={tasks} />
      <Chronometer />
    </div>
  )
}

export default App
