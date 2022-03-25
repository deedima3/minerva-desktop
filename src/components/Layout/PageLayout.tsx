import React from 'react'
import Sidebar from '../Navbar/Sidebar'

const PageLayout = ({ children } : any) => {
  return (
    <div className="flex flex-row bg-brand-black-primary font-Inter overflow-hidden">
        <Sidebar/>
        <div className="block w-full p-8">
            { children }
        </div>
    </div>
  )
}

export default PageLayout