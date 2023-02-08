import { useState } from 'react'
import Item from './Item'
import style from './Lista.module.scss'

const { listaTarefas, item: itemStyle } = style

const data = [
  {
    id: 1,
    tarefa: 'React',
    tempo: '02:00:00',
  },
  {
    id: 2,
    tarefa: 'Javascript',
    tempo: '01:00:00',
  },
]

const Lista = () => {
  const [tarefas, setTarefas] = useState(() => data)
  const handleClick = () => {
    setTarefas([
      ...tarefas,
      { id: tarefas.length + 1, tarefa: 'nova', tempo: '04:00:00' },
    ])
  }

  return (
    <aside className={listaTarefas}>
      <h2 onClick={handleClick}> Estudos do dia </h2>
      <ul>
        {tarefas.map(({ id, tarefa, tempo }) => (
          <Item key={id} {...{ tarefa, tempo, itemStyle }} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista
