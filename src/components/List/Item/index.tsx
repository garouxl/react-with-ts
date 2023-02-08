import { IList } from "../../../types/types"

const Item = ({
  id,
  task,
  time,
  itemStyle,
}: IList) => {
  return (
    <li className={itemStyle}>
      <h3>{id}: {task}</h3>
      <span>{time}</span>
    </li>
  )
}

export default Item
