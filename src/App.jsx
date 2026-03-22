import { useState } from 'react'
import './index.css'
import Nav from './Nav'
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Footer from './Footer';
import ThemeController from './ThemeController';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Menu></Menu>
      <Contact></Contact>
      <Footer></Footer>
      <ThemeController></ThemeController>
    </>
  )
}

export default App
