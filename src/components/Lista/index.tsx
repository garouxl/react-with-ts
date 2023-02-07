import Item from './Item'
import style from './style.module.scss'

const { listaTarefas, item: itemStyle } = style

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
        {tarefas.map(({ id, tarefa, tempo }) => (
          <Item key={id} {...{ tarefa, tempo, itemStyle }} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista
