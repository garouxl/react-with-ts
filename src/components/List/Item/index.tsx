const Item = ({
  task,
  time,
  itemStyle,
}: {
  task: string
  time: string
  itemStyle: string
}) => {
  return (
    <li className={itemStyle}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}

export default Item
