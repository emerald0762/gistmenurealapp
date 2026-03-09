import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/HomeRounded'
import IconButton from '@mui/material/IconButton'

export default function Restaurant1Lunch() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState([])
  const todayDB = new Date().toISOString().split('T')[0]
  const todayDisplay = new Date(). toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric', weekday: 'short'})
 
  useEffect(() => {
    fetch(`http://gistmenuapp-production.up.railway.app/api/menu?date=${todayDB}&restaurant=1식당`)
      .then(res => res.json())
      .then(data => setMenu(data['점심'] || []))
  }, [todayDB])

  return (
     <Stack spacing={1} direction="column" sx={{alignItems: "center"}}>
        <Typography variant="h4" sx={{ color: '#000000' }}>{todayDisplay} 점심</Typography>
         {menu.length > 0 ? (
           menu.map((item, index) => (
             <Typography key={index} variant="h5" sx={{ color: '#000000' }}>{item}</Typography>
          ))
        ) : (
          <Typography variant="h5" sx={{ color: '#000000' }}>메뉴 없음</Typography>
        )}
       <Typography variant="h6" sx={{color:'#ffffff'}}>1</Typography>
       <Stack direction="row" sx={{alignItems: "center"}}>
         <Button variant="text" onClick={() => navigate('/restaurant1breakfast')} sx={{color: '#000000'}}>아침</Button>
         <Button variant="text" onClick={() => navigate('/restaurant1dinner')} sx={{color: '#000000'}}>저녁</Button>
       </Stack>
       <IconButton onClick={() => navigate('/')} size="large"> <HomeIcon fontSize='inherit' /> </IconButton>
     </Stack>
    

   
  )
}