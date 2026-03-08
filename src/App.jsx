
import { Routes, Route } from 'react-router-dom'
import BasicButtons from './BasicButtons'
import Restaurant1breakfast from './pages/Restaurant1breakfast.jsx'
import Restaurant2breakfast from './pages/Restaurant2breakfast.jsx'
import Restaurant1lunch from './pages/Restaurant1lunch.jsx'
import Restaurant1dinner from './pages/Restaurant1dinner.jsx'
import Restaurant2lunch from './pages/Restaurant2lunch.jsx'
import Restaurant2dinner from './pages/Restaurant2dinner.jsx'
import Admin from './Admin'



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicButtons />} />
      <Route path="/restaurant1breakfast" element={<Restaurant1breakfast />} />
      <Route path="/restaurant1lunch" element={<Restaurant1lunch />} />
      <Route path="/restaurant1dinner" element={<Restaurant1dinner />} />
      <Route path="/restaurant2breakfast" element={<Restaurant2breakfast />} />
      <Route path="/restaurant2dinner" element={<Restaurant2dinner />} />
      <Route path="/restaurant2lunch" element={<Restaurant2lunch />} />
      <Route path="/nhw090909" element={<Admin />} />
    </Routes>
  )
}


