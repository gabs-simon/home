import { FC } from 'react'

const History: FC = (props) => {
  return (<div className="w-full h-full px-6 py-8 grow cursor-text">{props.children}</div>)
}

export default History