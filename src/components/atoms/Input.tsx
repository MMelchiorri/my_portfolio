import { ReactNode } from 'react'

type InputProps = {
  value: string
  handleChange: () => void
}

export default function Input({ value, handleChange }: InputProps): ReactNode {
  return <input type="text" value={value} onChange={handleChange} />
}