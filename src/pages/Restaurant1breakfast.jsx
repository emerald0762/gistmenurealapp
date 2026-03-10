import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/HomeRounded'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function Restaurant1Breakfast() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState([])
  const today = new Date()
  const todayDB = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`
  const todayDisplay = new Date(). toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric', weekday: 'short'})

  useEffect(() => {
    fetch(`https://gistmenuapp-production.up.railway.app/api/menu?date=${todayDB}&restaurant=1식당`)
      .then(res => res.json())
      .then(data => {
       console.log('data:', data)
       console.log('아침:', data['아침'])
       setMenu(data['아침'] || [])
       })
  }, [todayDB])

  return (
    
      

      <Stack spacing={1} alignItems="center">
        <Typography variant="h4" sx={{ color: '#000000' }}>{todayDisplay} 아침</Typography>
        <Typography variant="subtitle1" sx={{ color: '#ffffff' }}>
        1
        </Typography>
        {menu.length > 0 ? (
          menu.map((item, index) => (
            <Typography key={index} variant="h5" sx={{ color: '#000000' }}>{item}</Typography>
          ))
        ) : (
          <Typography variant="h5" sx={{ color: '#000000' }}>메뉴 없음</Typography>
        )}
        <Typography variant="subtitle1" sx={{ color: '#ffffff' }}>1</Typography>
        <Stack direction="row" sx={{alignItems: "center"}}>
         <Button variant="text" sx={{color: '#ffffff'}}startIcon={<ArrowBackIosIcon />}>아침</Button>
         <Button variant="text" onClick={() => navigate('/restaurant1lunch')} sx={{color: '#000000'}}endIcon={<ArrowForwardIosIcon/>}>점심</Button>
        </Stack>
        <IconButton onClick={() => navigate('/')} size="large"><HomeIcon fontSize='inherit' />
        </IconButton>
      </Stack>

  )
}