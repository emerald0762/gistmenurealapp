import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/HomeRounded'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function Restaurant1Dinner() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState([])
  const today = new Date()
  const todayDB = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`
  const todayDisplay = new Date(). toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric', weekday: 'short'})
 
  useEffect(() => {
    fetch(`https://gistmenuapp-production.up.railway.app/api/menu?date=${todayDB}&restaurant=1식당`)
      .then(res => res.json())
      .then(data => setMenu(data['저녁'] || []))
  }, [todayDB])

  return (
     <Stack spacing={1} alignItems="column" sx={{justifyContent: "space-evenly", alignItems: "center"}}>
       <Typography variant="h4" sx={{ color: '#000000' }}>{todayDisplay} 저녁</Typography>
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
       <Typography variant="subtitle1" sx={{color:'#ffffff'}}>1</Typography>
       <Button variant="text" onClick={() => navigate('/restaurant1lunch')} sx={{color: '#000000'}}startIcon={<ArrowBackIosIcon />}>점심</Button>
       <IconButton onClick={() => navigate('/')} size="large"> <HomeIcon fontSize='inherit' /> </IconButton>

      </Stack>
   
  )
}