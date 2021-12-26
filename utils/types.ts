import { ReactElement } from 'react'

export type Command<Input = any, Output = any> = {

  name: string
  description?: string
  usage?: string

  parse: (input: string, commands?: CommandRecord) => Input
  execute: (input: Input) => Output
  render: (output: Output) => ReactElement
}

export type EmptyCommand = Command<void, void>

export type AnyCommand = Command<any, any>

export type CommandRecord = Record<string, AnyCommand>