import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Projects from './pages/Projects.jsx'
import Writing from './pages/Writing.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/work' element={<Work />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/writing' element={<Writing />}/>
        <Route path='/about' element={<About />}/>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
