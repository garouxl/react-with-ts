export interface ITasks {
  id?: number
  task?: string
  time?: string
}

export interface IList {
  id?: number
  task?: string
  time?: string
  itemStyle?: string
}

export interface IButton {
  texto: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export interface TInput {
  event?: React.ChangeEvent<HTMLInputElement>
  type?: string
}
