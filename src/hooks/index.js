import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')
  
  const reset = () => {
    setValue('')
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
    vote: 1,
    reset
  }
}