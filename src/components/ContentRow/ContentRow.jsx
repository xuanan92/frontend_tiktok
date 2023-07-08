import { Bookmark, Comment, Favorite, Reply } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import './ContentRow.css'


export default function ChannelContentRow({ channel, ticker, channel_name, channel_image, status, music,
  music_url, url_Video, heart, comment, mark, share }) {

  return (
    <div className='contentrow'>
      <Avatar className='contentrow__avatar' src={channel_image} />
      <div className='contentrow__content'>
        <div className='contentrow__text'>
          <div>
            <h3>{channel} {ticker} {channel_name}</h3>
            <h4>{status}</h4>
            {/* <a href={music_url} rel='noopener noreferrer' target='_blank'>{music}</a> */}
            <Link to={music_url}>{music}</Link>
          </div>
          <Button>Follow</Button>
        </div>
        <div className='contentrow__video'>
          <div className='w-[310px]'>
            <ReactPlayer
              // className='w-[300px] h-[508px]'
              url={url_Video}
              width="300px"
              height="508px"
              controls
            />
          </div>
          <div className='relative'>
            <div className='absolute bottom-0'>
              <Favorite />
              <h4>{heart}</h4>
              <Comment />
              <h4>{comment}</h4>
              <Bookmark />
              <h4>{mark}</h4>
              <Reply />
              <h4>{share}</h4>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
