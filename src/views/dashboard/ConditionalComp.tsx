import React, { ReactNode } from 'react'

interface Props {
  when: boolean
  children: ReactNode
}

const ConditionalComp = ({ when, children }: Props) => {
  return <>{when && children}</>
}

export default ConditionalComp
