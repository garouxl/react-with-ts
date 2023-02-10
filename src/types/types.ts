export interface ITasks {
  id: number
  task: string
  time: string
  selected: boolean
  finished: boolean
}

export interface IButton {
  texto: string
  type?: 'button' | 'submit' | 'reset' | undefined
  action?: () => void
}

export interface TInput {
  event?: React.ChangeEvent<HTMLInputElement>
  type?: string
}
