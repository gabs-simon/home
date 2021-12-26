import { FC } from 'react'

const Shell: FC = () => {
  return (<div className="text-md font-bold px-1 text-green-400">{'>'}</div>)
}
type InputProps = {
  input: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<InputProps> = ({ input, onChange }) => {
  return (<div className="w-full grow px-1">
    <input autoComplete='off' onChange={onChange} type="text" value={input} id="prompt-input"
      className="font-medium w-full bg-transparent border-0 focus:outline-none focus-visible:outline-none focus:border-0" />
  </div>)
}

type PromptProps = {
  input: string
  setInput: (text: string) => void,
}
const Prompt: FC<PromptProps> = (props) => {

  return (<div className="h-10 w-full bg-neutral-200 dark:bg-slate-700 rounded-b-lg px-2 py-2 grid">
    <div className="w-full place-self-center text-slate-900 dark:text-slate-100 text-xs flex flex-row">
      <Shell />
      <Input input={props.input} onChange={((e) => props.setInput(e.target.value))} />
    </div>
  </div>)
}

export default Prompt