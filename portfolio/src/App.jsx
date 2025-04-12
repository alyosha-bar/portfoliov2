import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import CursorFollow from './components/CursorFollow'
import './App.css'
import Contact from './components/Contact'
import BlogHomePage from './components/blog/BlogHomePage'
import BlogEntry from './components/blog/BlogEntry'

function App() {

  return (
    <>
      <CursorFollow></CursorFollow>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<BlogHomePage />} />
        <Route path='/blog/:id' element={<BlogEntry />} />
      </Routes>
    </>
  )
}

export default App
