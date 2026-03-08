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
    <Stack direction="row" spacing={20} sx={{justifyContent: "space-evenly", alignItems: "center"}} >
     <Button variant="text" onClick={() => navigate('/restaurant1breakfast')} sx={{color: '#000000', fontSize:'3rem'}}>아침</Button>
     <Stack spacing={1} alignItems="column" sx={{justifyContent: "space-evenly", alignItems: "center"}}>
        <Typography variant="h3" sx={{ color: '#000000' }}>{todayDisplay} 점심</Typography>
         {menu.length > 0 ? (
           menu.map((item, index) => (
             <Typography key={index} variant="h6" sx={{ color: '#000000' }}>{item}</Typography>
          ))
        ) : (
          <Typography variant="h6" sx={{ color: '#000000' }}>메뉴 없음</Typography>
        )}
       <Typography variant="h6" sx={{color:'#ffffff'}}>1</Typography>
       <IconButton onClick={() => navigate('/')} size="large"> <HomeIcon fontSize='inherit' /> </IconButton>
     </Stack>
     <Button variant="text" onClick={() => navigate('/restaurant1dinner')} sx={{color: '#000000', fontSize:'3rem'}}>저녁</Button>

    </Stack>

   
  )
}