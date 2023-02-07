import React from 'react'

import style from './style.module.scss'

const { listaTarefas, item: lineItem } = style

const Lista = () => {
  const tarefas = [
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

  return (
    <aside className={listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <li key={item.id} className={lineItem}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Lista
