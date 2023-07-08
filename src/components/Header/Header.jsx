import React from 'react'
import { Search, MoreVert, Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import './Header.css'

export default function header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img className='header__logo' src="https://res.cloudinary.com/dxlr7o35j/image/upload/v1688447688/Tiktok%20Clone/logo-Tiktok-removebg-preview_auospf.png" alt="tiktok logo" />
      </div>
      <div className="header__search">
        <input className='header__searchinput' type="text" placeholder='Search' />
        <Search className='header__searchicon' />
      </div>
      <div className='header__utils'>
        <Button className="header__button header__utilsupload">
          <Add className='header__utilsadd' />
          <p>
            Tải lên
          </p>
        </Button>
        <Button className='header__button header__utilslogin'>Đăng nhập</Button>
        <MoreVert className="header__utilsdot" />
      </div>
    </div>
  )
}
