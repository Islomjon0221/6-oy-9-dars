import './App.css'
import AboutUs from './pages/AboutUs'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
import { Route, BrowserRouter, Routes, NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <header>Bahromov Islomjon</header>
        <nav>
          <NavLink to="/">First</NavLink>
          <NavLink to="/second">Second</NavLink>
          <NavLink to="/third">Third</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<First></First>}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/second' element={<Second></Second>}>

          </Route>
          <Route path='/third' element={<Third></Third>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App