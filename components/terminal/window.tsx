import React from 'react'

const Header: React.FC = () => {
  return (<div className="h-10 w-full bg-neutral-150 rounded-t-lg dark:bg-slate-700 px-2 grid dark:text-white text-slate-900 ">
    <h1 className="text-sm w-full font-bold place-self-center text-center">Title</h1>
  </div>)
}

const History: React.FC = () => {
  return (<div className="w-full h-full px-6 py-8 grow"></div>)
}

const Location: React.FC = () => {
  return (<div className="text-md font-bold px-2 text-green-200">~/</div>)
}

const Shell: React.FC = () => {
  return (<div className="text-md font-bold px-0 text-blue-300">$</div>)
}

const Command: React.FC = () => {
  return (<div className="w-full grow px-1">Text</div>)
}

const Input: React.FC = () => {
  return (<div className="h-10 w-full bg-neutral-200 dark:bg-slate-700 rounded-b-lg px-2 py-2 grid">
    <div className="w-full place-self-center text-slate-900 dark:text-slate-100 text-xs flex flex-row">
      <Location />
      <Shell />
      <Command />
    </div>
  </div>)
}

const Window: React.FC = () => {
  // Renders the header of a mac-style terminal window
  return (
    <div id="window" className={`window h-full bg-neutral-50 dark:bg-neutral-900 rounded-lg flex flex-col`}>
      <Header />
      <History />
      <Input />
    </div>
  )
}

export default Window