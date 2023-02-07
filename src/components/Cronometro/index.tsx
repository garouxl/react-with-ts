import Botao from '../Botao'
import Relogio from './Relogio'

import style from './style.module.scss'

const Cronometro = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao texto='Começar' />
    </div>
  )
}

export default Cronometro
