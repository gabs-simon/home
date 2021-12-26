import { FC } from 'react'
import { Command, AnyCommand } from '../../utils/types'
import { Line, ErrorLine } from '../Line'

type HelpInput<C = AnyCommand> = {
  command?: C
  input: string
}

type HelpOutput = {
  name: string
  description?: string
  usage?: string
  notFound?: boolean
}

const HelpOutput: FC<HelpOutput> = ({ name, description, usage }) => {
  return (
    <>
      <Line>
        <span className="text-bold">{name}</span>
        {description && (<span> - {description}</span>)}
      </Line>
      {usage && (<Line small>{usage}</Line>)}
    </>
  )
}

const NotFoundOutput: FC<HelpOutput> = ({ name }) => {
  return (
    <>
      <ErrorLine>Could not find the command [{name}]</ErrorLine>
      <Line small>Please try again.</Line>
    </>
  )
}

const HelpCommand: Command<HelpInput, HelpOutput> = {
  name: 'help',
  description: 'Shows this help message',
  usage: 'help [command]',

  parse: (input, commands) => {
    const [command] = input.split(' ')
    if (commands[command]) {
      return { input, command: commands[command] }
    }
    return { input }
  },

  execute: ({ input, command }) => {
    if (command) {
      return {
        name: command.name,
        description: command.description,
        usage: command.usage
      }
    }
    return {
      name: input,
      notFound: true
    }
  },

  render: ({ name, description, usage, notFound }) => {
    if (notFound) {
      return (<NotFoundOutput name={name} />)
    }

    return (<HelpOutput name={name} description={description} usage={usage} />)
  }
}

export default HelpCommand