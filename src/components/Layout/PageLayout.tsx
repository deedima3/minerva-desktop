import React from 'react'
import Sidebar from '../Navbar/Sidebar'

const PageLayout = ({ children } : any) => {
  return (
    <div className="flex flex-row bg-brand-black-primary">
        <Sidebar/>
<<<<<<< Updated upstream
        <div className="block">
=======
        <div className="block w-full p-8">
>>>>>>> Stashed changes
            { children }
        </div>
    </div>
  )
}

export default PageLayout