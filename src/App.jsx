import React from 'react'
import RegisterAndCard from './components/registratsion/RegisterAndCard'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
       <Toaster position="top-right" reverseOrder={false} />
      <RegisterAndCard />
    </div>
  )
}

export default App
