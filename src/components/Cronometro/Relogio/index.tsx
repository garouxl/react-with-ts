import style from './Relogio.module.scss'

const Relogio = () => {
  return (
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  )
}

export default Relogio
