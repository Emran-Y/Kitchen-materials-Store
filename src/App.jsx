import react from 'react'
import './index.css'
import Layout from './Layout'
import Items from './pages/Items'
import About from './pages/About'
import Host from './pages/Host'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='host' element={<Host/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='items' element={<Items/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}