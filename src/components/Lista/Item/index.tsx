const Item = ({
  tarefa,
  tempo,
  itemStyle,
}: {
  tarefa: string
  tempo: string
  itemStyle: string
}) => {
  return (
    <li className={itemStyle}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}

export default Item
