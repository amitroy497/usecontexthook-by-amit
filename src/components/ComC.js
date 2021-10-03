import React, { useContext } from 'react'
import { BioData } from '../App'

const ComC = () => {
  const myName = useContext(BioData)
  return <h1>My name is {myName}</h1>
}

export default ComC
