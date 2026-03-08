import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import logo from './logo/image.avif'

export default function BasicButtons() {
  const navigate = useNavigate()

  return (
    <Stack alignItems="center">
        <img src={logo} alt="로고" style={{ width: '200px' }} />
        <Typography variant="h3" sx={{color:'#000000', marginBottom: '40px' }}>학생회관 메뉴 보기</Typography>
        <Stack spacing={10} direction="row">
            <Button variant="contained" color="secondary" onClick={() => navigate('/restaurant1breakfast')} sx={{width:'200px', height:'114px', fontSize:'2rem'}}>
               제1학생회관
            </Button>
            <Button variant="contained" color="error" onClick={() => navigate('/restaurant2breakfast')} sx={{width:'200px', height:'114px', fontSize:'2rem'}}>
              제2학생회관
            </Button>
        </Stack>
    </Stack>
   
  )
}