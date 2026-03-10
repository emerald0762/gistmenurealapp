import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import logo from './logo/image.avif'

export default function BasicButtons() {
  const navigate = useNavigate()
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ padding: '10px', width: '100%' }}>
      <img src={logo} alt="로고" style={{ width: '40vw', maxWidth: '200px' }} />
      <Typography variant="h4" sx={{ color: '#000000', marginBottom: '40px', textAlign: 'center' }}>
        학생회관 메뉴 보기
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="secondary"
          onClick={() => navigate('/restaurant1breakfast')}
          sx={{ width: '35vw', maxWidth: '200px', height: '18vw', maxHeight: '114px'}}>
          제1학생회관
        </Button>
        <Button variant="contained" color="error"
          onClick={() => navigate('/restaurant2breakfast')}
          sx={{ width: '35vw', maxWidth: '200px', height: '18vw', maxHeight: '114px'}}>
          제2학생회관
        </Button>
        <Typography variant="h4" sx={{ color: '#ffffff', marginBottom: '40px', textAlign: 'center' }}>
        11111
      </Typography>
       <Typography variant="h4" sx={{ color: '#ffffff', marginBottom: '40px', textAlign: 'center' }}>
        11111
      </Typography>

      </Stack>
    </Stack>
  )
}