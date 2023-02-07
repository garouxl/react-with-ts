import { useState } from 'react'

import style from './style.module.scss'

const Botao = ({ texto }: { texto: string }) => {
  const [estaAtivo, setEstaAtivo] = useState(false)
  const styles = {
    backgroundColor: estaAtivo ? 'blue' : 'red',
    color: 'yellow',
  }

  const handleClick = () => setEstaAtivo(!estaAtivo)

  return (
    <button onClick={handleClick} className={style.botao} style={styles}>
      {texto}
    </button>
  )
}

export default Botao
