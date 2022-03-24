import React from 'react'
import Sidebar from '../Navbar/Sidebar'

const PageLayout = ({ children } : any) => {
  return (
    <div className="flex flex-row bg-brand-black-primary">
        <Sidebar/>
        <div className="block">
            { children }
        </div>
    </div>
  )
}

export default PageLayout