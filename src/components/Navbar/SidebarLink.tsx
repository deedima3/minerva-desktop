import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarLinkProps } from '../../interfaces/navbar.interface'
import Icon from '@ant-design/icons'

const SidebarLink = ({routes, icon, iconSelected} : SidebarLinkProps) => {
  const location = useLocation();
  
  return (
    <div className="">
      <Link to={routes}>
        {location.pathname === routes ? iconSelected : icon}
      </Link>
    </div>
  )
}

export default SidebarLink