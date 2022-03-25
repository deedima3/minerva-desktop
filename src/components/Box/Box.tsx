import React from 'react'
import { BoxProps } from '../../interfaces/box.interface'

const Box = ({children, extraClass, variant} : BoxProps) => {

  const variantClass = variant === "primary" ? "bg-brand-black-primary" : "bg-brand-black-secondary"

  return (
    <div className={`${variantClass} ${extraClass}`}>
        {children}
    </div>
  )
}

export default Box