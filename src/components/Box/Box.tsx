import React from 'react'
import { BoxProps } from '../../interfaces/box.interface'

const Box = ({children, extraClass} : BoxProps) => {
  return (
    <div className={`bg-brand-black-secondary ${extraClass}`}>
        {children}
    </div>
  )
}

export default Box