import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Home from './Components/Home/Home.jsx'
import AddAPart from './Components/AddAPart/AddAPart.jsx'
import PartList from './Components/PartList/PartList.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {

  const [page, setPage] = useState('Home')
  
const handleNav = (e) => {
  setPage(e.target.value)

}




  return (
    <>
      <Header />
      <NavBar handleNav={handleNav}/>
        {page === 'Home' ? <Home /> : ''}
        {page === 'AddPart' ? <AddAPart /> : ''}
        {page === 'PartList' ? <PartList /> : ''}
      <Footer />
      
    </>
  )
}

export default App
