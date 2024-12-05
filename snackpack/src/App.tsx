import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import MarketPage from "./MarketPage.tsx";

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <div className='flex row justify-between px-7 mt-3 mb-4'>
      <div className='font-bold text-white text-2xl'>Snackpack</div>
      <div className='flex justify-between'>
        <div className='text-[#00C278] font-bold bg-[#00C278] bg-opacity-25 px-4 mr-5 py-1.5 rounded-md'>Sign up</div>
        <div className='text-[#4c4c94] bg-[#4c4c94] bg-opacity-35 font-bold px-4 py-1.5 rounded-md'>Sign in</div>
      </div>
    </div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/trade' element={<MarketPage/>}/>

      </Routes>

    </BrowserRouter>
  </div>
}

export default App
