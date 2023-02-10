import { ITasks } from '../../types/types'
import Button from '../Button'
import Clock from './Clock'

import style from './Chronometer.module.scss'
import { timeToSeconds } from '../../common/utils/date'
import { useEffect, useState } from 'react'

interface Props {
  selected: ITasks | undefined
  finishTask: any
}

const Chronometer = ({ selected, finishTask }: Props) => {
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    if (selected && selected?.time !== undefined)
      setTime(timeToSeconds(selected?.time))
  }, [selected])

  const countdown = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return countdown(counter - 1)
      }
      return finishTask()
    }, 1000)
  }

  return (
    <div className={style.chronometer}>
      <p className={style.title}> Escolha um card e inicie o cronômetro </p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button texto='Começar' action={() => countdown(time)} />
    </div>
  )
}

export default Chronometer
