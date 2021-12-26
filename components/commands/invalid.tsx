import { ReactElement } from 'react'
import { ErrorLine } from '../Line'
import { Command } from '../../utils/types'

const InvalidOutput: React.FC<{ commandName: string }> = ({ commandName }): ReactElement => {
  return (
    <>
      <ErrorLine>Command [{commandName}] does not exist.</ErrorLine>
      <ErrorLine small>Please check your spelling and try again.</ErrorLine>
    </>
  )
}

const InvalidCommand: Command<string, string> = {
  name: 'hello <name>',
  description: 'I will reply with a hello message',
  execute: (c) => c,
  parse: (c) => c,
  render: (commandName) => (<InvalidOutput commandName={commandName} />)
}

export default InvalidCommand