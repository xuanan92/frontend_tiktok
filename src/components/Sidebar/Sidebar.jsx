import React from 'react'
import './Sidebar.css'
import { Explore, Home, SupervisorAccount, Videocam } from '@mui/icons-material'
import { Button } from '@mui/material'
import SidebarRow from '../SidebarRow/SidebarRow'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__menu'>
        <SidebarRow selected Icon={Home} menuItem='Dành cho bạn' />
        <SidebarRow Icon={SupervisorAccount} menuItem='Đang follow' />
        <SidebarRow Icon={Explore} menuItem='Khám phá' />
        <SidebarRow Icon={Videocam} menuItem='LIVE' />
        <div className='sidebar__para'>
          <hr />
          <p>Đăng nhập để follow các tác giả, thích video và xem bình luận</p>
          <Button className='sidebar__login'>Đăng nhập </Button>
        </div>
      </div>

      <div className='footer'>
        <hr />
        <div className='footer__left'>
          <div className='link__block'>
            <div>
              <Link to="/" className="link"> Giới thiệu </Link>
              <Link to="/" className="link"> Bảng tin </Link>
              <Link to="/" className="link"> Liên hệ </Link>
            </div>
            <div>
              <Link to="/" className="link"> Sự nghiệp </Link>
              <Link to="/" className="link"> ByteDance </Link>
            </div>
          </div>
          <div className='link__block'>
            <div>
              <Link to="/" className="link"> TikTok for Good </Link>
              <Link to="/" className="link"> Quảng cáo </Link>
            </div>
            <Link to="/" className="link"> Developers </Link>
            <Link to="/" className="link"> Minh bạch </Link>
            <div>
            </div>
            <div>
              <Link to="/" className="link"> TikTok Rewards </Link>
              <Link to="/" className="link"> Tiktok Embeds </Link>
            </div>
          </div>
          <div className='link__block'>
            <div>
              <Link to="/" className="link"> Trợ giúp </Link>
              <Link to="/" className="link"> An toàn </Link>
              <Link to="/" className="link"> Điều khoản </Link>
            </div>
            <div>
              <Link to="/" className="link"> Quyền riêng tư </Link>
              <Link to="/" className="link"> Cổng thông tin </Link>
              <Link to="/" className="link"> Tác giả </Link>
            </div>
            <div>
              <Link to="/" className="link"> Hướng dẫn </Link>
              <Link to="/" className="link"> Cộng đồng </Link>
            </div>
            <div className='link__block'>
              <Link to="/" className="link"> Thêm </Link>
            </div>
          </div>
          <div className='link__block'>
            <p className='text-[#16182380]'> @2023 Tiktok </p>
          </div>
        </div>
      </div>
    </div >
  )
}
