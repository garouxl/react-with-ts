import style from './Clock.module.scss'

interface Props {
  time: number
}

const Clock = ({ time }: Props) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minuteDecimal, minuteUnite] = String(minutes).padStart(2, '0')
  const [secondDecimal, secondUnite] = String(seconds).padStart(2, '0')


  return (
    <>
      <span className={style.clockNumber}>{minuteDecimal}</span>
      <span className={style.clockNumber}>{minuteUnite}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondDecimal}</span>
      <span className={style.clockNumber}>{secondUnite}</span>
    </>
  )
}

export default Clock
