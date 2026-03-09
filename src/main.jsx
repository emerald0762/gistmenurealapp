import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Paperlogy-8ExtraBold',
    button: {fontSize: '5vw'}
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <ThemeProvider theme={theme}>
       <App />
     </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)

