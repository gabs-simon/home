import { ReactElement } from "react"
import { InfoLine as Line } from '../components/Line'
import { AnyCommand } from '../utils/types'
import commands from '../components/commands'

export const runCommand = (
  emptyPrompt: () => void,
  pushToHistory: (c: ReactElement | ReactElement[]) => void
) =>
  (input: string) => {
    const text = input.trim()

    if (text && text.length > 0) {
      const lineText = (<Line>{text}</Line>)
      const [commandName, ...args] = text.split(' ')

      if (commands[commandName]) {
        const command: AnyCommand = commands[commandName]
        const input = command.parse(args.join(' '), commands)
        const output = command.execute(input)

        pushToHistory([lineText, command.render(output)])
      } else {
        pushToHistory([lineText, commands.invalid.render('Invalid command')])
      }

      emptyPrompt()
    }
  }