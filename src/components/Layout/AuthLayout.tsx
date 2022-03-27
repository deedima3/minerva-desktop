import React from 'react'

const AuthLayout = ({children} : any) => {
  return (
    <div className="flex flex-row bg-brand-black-primary font-Inter overflow-hidden h-screen w-scree justify-center items-center">
        { children }
    </div>
  )
}

export default AuthLayout