import { useState } from 'react'
import Button from '../Button'

import style from './Form.module.scss'

const initialData = {
  task: '',
  time: '00:00:00',
}


const Form = ({handleTasks}: {handleTasks: Function}) => {
  const [state, setState] = useState(() => initialData)

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      handleTasks(state)
  }

  return (
    <form className={style.newTask} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor='task'>Adicione um novo estudo</label>
        <input
          type='text'
          name='task'
          id='task'
          placeholder='O que você quer estudar'
          required
          value={state.task}
          onChange={(event) => setState({ ...state, task: event.target.value })}
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
          value={state.time}
          onChange={(event) => setState({ ...state, time: event.target.value })}
        />
      </div>
      <Button type="submit" texto='Adicionar' />
    </form>
  )
}

export default Form
