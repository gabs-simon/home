import { ReactElement } from 'react'
import { Line } from '../Line'
import { Command } from '../../utils/types'

type HelloInput = {
  name: string
}

type HelloOutput = {
  message: string
}

const HelloOutput = ({ message }): ReactElement => {
  return (
    <Line>{message}</Line>
  )
}

const HelloCommand: Command<HelloInput, HelloOutput> = {
  name: 'hello <name>',
  description: 'I will reply with a hello message',
  execute: ({ name }) => {
    return { message: `Hello ${name}` }
  },
  parse: (a: string) => ({ name: a }),
  render: ({ message }) => (<HelloOutput message={message} />)
}

export default HelloCommand