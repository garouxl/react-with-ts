import { IButton } from '../../types/types'
import style from './Button.module.scss'

const Button = ({ texto, type = undefined, action }: IButton) => (
  <button type={type} className={style.button} onClick={action}>
    {texto}
  </button>
)

export default Button
