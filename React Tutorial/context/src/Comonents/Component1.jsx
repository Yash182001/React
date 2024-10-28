import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../Context/Context'

export default function Component1() {
    const counter = useContext(counterContext)
  return (
    <div>
      {counter}
    </div>
  )
}
