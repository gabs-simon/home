import { FC } from 'react'

type LineProps = {
  className?: string
  small?: boolean
}
export const Line: FC<LineProps> = ({ className, children, small }) => {
  let cl = [
    className,
    small ? "h-5" : "h-7",
  ].join(' ')
  return (
    <div className={"w-full text-slate-800 dark:text-slate-100" + cl}>
      {children}
    </div>
  )
}

export const InfoLine: FC<LineProps> = ({ children }) => {
  return (
    <Line className="font-bold text-sm text-blue-500 dark:text-blue-300">
      {children}
    </Line>
  )
}

export const ErrorLine: FC<LineProps> = ({ children }) => {
  return (
    <Line className="font-bold text-sm text-red-700 dark:text-red-500">
      {children}
    </Line>
  )
}

export const SuccessLine: FC<LineProps> = ({ children }) => {
  return (
    <Line className="font-bold text-sm text-green-700 dark:text-green-500">
      {children}
    </Line>
  )
}