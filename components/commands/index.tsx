import { CommandRecord } from '../../utils/types'
import hello from './hello'
import invalid from './invalid'
import help from './help'

const availableCommands: CommandRecord = {
  hello, invalid, help
}

export default availableCommands