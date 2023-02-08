import { IButton } from '../../types/types'
import style from './Button.module.scss'

const Button = ({
  texto,
  type = undefined,
}: IButton) => {
  return (
    <button type={type} className={style.button}>
      {texto}
    </button>
  )
}

export default Button
