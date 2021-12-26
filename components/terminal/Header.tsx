import { FC } from 'react'

type HeaderProps = {
  title: string
}
const Header: FC<HeaderProps> = ({ title }) => {
  return (<div className="h-10 w-full bg-neutral-150 rounded-t-lg dark:bg-slate-700 px-2 grid dark:text-white text-slate-900 ">
    <h1 className="text-sm w-full font-bold place-self-center text-center">{title}</h1>
  </div>)
}

export default Header