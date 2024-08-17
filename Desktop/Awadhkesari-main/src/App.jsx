import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='px-2 lg:px-24'>
        <Header />
        <Outlet />
      </div>
      <Footer className='px-2 lg:px-24'/>
    </>
  )
}

export default App
