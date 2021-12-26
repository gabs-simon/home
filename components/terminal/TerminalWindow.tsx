import { FC, useState, ReactElement } from 'react'
import { runCommand as rc } from '../../utils/command'

import Header from './Header'
import History from './History'
import Prompt from './Prompt'

const Window: FC = () => {
  const h: ReactElement[] = []
  const [history, setHistory] = useState(h)
  const [input, setInput] = useState('')

  const pushToHistory = (c: ReactElement | ReactElement[]) => {
    if (Array.isArray(c)) {
      setHistory([...history, ...c])
    } else {
      setHistory([...history, c])
    }
  }
  const emptyPrompt = () => setInput('')

  const runCommand = rc(emptyPrompt, pushToHistory)
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input)
    }
  }

  return (
    <div
      id="window"
      className={`window h-full bg-neutral-50 dark:bg-neutral-900 rounded-lg flex flex-col`}
      onKeyPress={onKeyDown}
      onClick={() => document.getElementById('prompt-input').focus()}>
      <Header title="Header" />
      <History>
        {history.map((h, i) => <div key={`terminal-history-${i}`}>{h}</div>)}
      </History>
      <Prompt input={input} setInput={setInput} />
    </div>
  )
}

export default Window