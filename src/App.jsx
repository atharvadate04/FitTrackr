import { useState } from 'react'

import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Signup from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Signup/>
    </>
  )
}

export default App
