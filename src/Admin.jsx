import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'


export default function Admin() {
  const [date, setDate] = useState('')
  const [restaurant, setRestaurant] = useState('1식당')
  const [mealType, setMealType] = useState('아침')
  const [items, setItems] = useState('')

  const handleSubmit = async () => {
    const response = await fetch('http://gistmenuapp-production.up.railway.app/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date,
        restaurant,
        meal_type: mealType,
        items: items.split('\n').filter(item => item.trim() !== '')
      })
    })
    const data = await response.json()
    if (data.success) alert('저장완료')
  }

  return (
    <Stack spacing={2} sx={{ padding: '20px', maxWidth: '400px' }}>
      <Typography variant="h5" sx={{color:'#000000'}}>메뉴 입력</Typography>

      <TextField
        label="날짜"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      <Select value={restaurant} onChange={(e) => setRestaurant(e.target.value)}>
        <MenuItem value="1식당">제1학생식당</MenuItem>
        <MenuItem value="2식당">제2학생식당</MenuItem>
      </Select>

      <Select value={mealType} onChange={(e) => setMealType(e.target.value)}>
        <MenuItem value="아침">아침</MenuItem>
        <MenuItem value="점심">점심</MenuItem>
        <MenuItem value="저녁">저녁</MenuItem>
      </Select>

      <TextField
        label="메뉴 (줄바꿈으로 구분)"
        multiline
        rows={6}
        value={items}
        onChange={(e) => setItems(e.target.value)}
        placeholder={"백미밥\n된장찌개\n계란찜"}
      />

      <Button variant="contained" onClick={handleSubmit}>저장</Button>
    </Stack>
  )
}