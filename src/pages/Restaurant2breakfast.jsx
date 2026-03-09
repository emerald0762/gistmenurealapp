import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/HomeRounded'
import { useNavigate } from 'react-router-dom'

export default function Restaurant2Breakfast() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState([])
  const todayDB = new Date().toISOString().split('T')[0]
  const todayDisplay = new Date(). toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric', weekday: 'short'})

  useEffect(() => {
    fetch(`http://gistmenuapp-production.up.railway.app/api/menu?date=${todayDB}&restaurant=2식당`)
      .then(res => res.json())
      .then(data => setMenu(data['아침'] || []))
  }, [todayDB])

  return (

      <Stack spacing={1} alignItems="center">
        <Typography variant="h4" sx={{ color: '#000000' }}>{todayDisplay} 아침</Typography>
        {menu.length > 0 ? (
          menu.map((item, index) => (
            <Typography key={index} variant="h5" sx={{ color: '#000000' }}>{item}</Typography>
          ))
        ) : (
          <Typography variant="h5" sx={{ color: '#000000' }}>메뉴 없음</Typography>
        )}
        <Typography variant="h6" sx={{ color: '#ffffff' }}>1</Typography>
        
        <Button variant="text" onClick={() => navigate('/restaurant2lunch')} sx={{ color: '#000000'}}>점심</Button>
        <IconButton onClick={() => navigate('/')} size="large">
          <HomeIcon fontSize='inherit' />
        </IconButton>
      </Stack>

  
  )
}