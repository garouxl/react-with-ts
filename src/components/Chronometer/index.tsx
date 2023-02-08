import Button from '../Button'
import Clock from './Clock'

import style from './Chronometer.module.scss'
import { timeToSeconds } from '../../common/utils/date'

const Chronometer = ({ time }: { time: string }) => {

  return (
    <div className={style.chronometer}>
      <p className={style.title}> Escolha um card e inicie o cronômetro </p>
      <div className={style.clockWrapper}>
        <Clock time={timeToSeconds(time)} />
      </div>
      <Button texto='Começar' />
    </div>
  )
}

export default Chronometer
