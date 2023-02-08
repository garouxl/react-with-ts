import style from './Clock.module.scss'

const Clock = ({time}:{time: number}) => {
  console.log(time)
  return (
    <>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
    </>
  )
}

export default Clock
