import { SkipNext } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from '../../service/axios'
import ContentRow from '../ContentRow/ContentRow'
import './Content.css'


export default function Content() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get()
      setItems(response.data)
    }
    fetchData()
  }, [])

  return (
    <div className='content'>
      {items && items.map((item) => (
        <ContentRow
          channel_image={item.channel_image}
          channel={item.channel}
          ticker={item.ticker}
          channel_name={item.channel_name}
          status={item.status}
          music={item.music}
          music_url={item.music_url}
          url_Video={item.url_Video}
          heart={item.heart}
          comment={item.comment}
          mark={item.mark}
          share={item.share}
          key={item.id}
        />
      ))}
      <div className='utilsfloat'>
        <Button>Tải ứng dụng</Button>
        <SkipNext className='utilsfloat__icon' />
      </div>
    </div>
  )
}
