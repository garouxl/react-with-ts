import { useState } from 'react'

import style from './Button.module.scss'

const Button = ({ texto }: { texto: string }) => {
  const [active, setActive] = useState(false)
  const inLineStyles = {
    backgroundColor: active ? 'blue' : 'red',
    color: 'yellow',
  }

  const handleClick = () => setActive(!active)

  return (
    <button onClick={handleClick} className={style.button} style={inLineStyles}>
      {texto}
    </button>
  )
}

export default Button
