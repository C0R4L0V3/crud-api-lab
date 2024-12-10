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
import PartIndex from './Components/PartIndex/PartIndex.jsx'

function App() {

const [page, setPage] = useState('Home')
const [parts, setParts] = useState([])

// //use effect to get data
// useEffect(() => {
//     const fetchParts = async () => {
//         try {
//             let res = await fetch('/BusParts'); // matches the route defined in express
//             let JSONdata = await res.json()
//             console.log(JSONdata);
//             setParts(JSONdata.results)

//         } catch (error) {
//             console.error('Error fetching data');
//         }
//     };
//     fetchParts()
// }, []); //no dependencies 



const handleNav = (e) => {
  setPage(e.target.value)

}

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Header />
      <NavBar handleNav={handleNav}/>
        {page === 'Home' ? <Home /> : ''}
        {page === 'AddPart' ? <AddAPart /> : ''}
        {page === 'PartList' ? <PartList  setParts={setParts} parts={parts}/> : ''}
        {page === 'PartIndex' ? <PartIndex  setParts={setParts} parts={parts}/> : ''}
      <Footer />
      
    </>
  )
}

export default App
