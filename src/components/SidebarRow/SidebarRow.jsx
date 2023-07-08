import React from 'react'
import './SidebarRow.css'

export default function SidebarRow({ Icon, selected, menuItem }) {
  return (
    <div to="/" className={`sidebarRow ${selected ? "active" : "deactive"}`}>
      <Icon className={`sidebarRow__icon ${selected}`} />
      <span>{menuItem}</span>
    </div>

  )
}
