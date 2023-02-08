import { ITasks } from '../../types/types'
import Button from '../Button'
import Clock from './Clock'

import style from './Chronometer.module.scss'
import { timeToSeconds } from '../../common/utils/date'
import { useEffect, useState } from 'react'

interface Props {
  selected: ITasks | undefined
}

const Chronometer = ({ selected }:Props ) => {

  const [time, setTime] = useState<string>('00:00:00')

  useEffect(() => {
    if (selected?.time !== undefined)
      setTime(selected?.time)
  }, [selected?.time])

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
