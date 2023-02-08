import Button from '../Button'

import style from  './Form.module.scss';

const Form = () => {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor='task'>Adicione um novo estudo</label>
        <input
          type='text'
          name='task'
          id='task'
          placeholder='O que você quer estudar'
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='time'>tempo</label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='01:30:00'
          required
        />
      </div>
      <Button texto="Adicionar" />
    </form>
  )
}

export default Form
