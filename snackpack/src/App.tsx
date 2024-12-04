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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/trade' element={<MarketPage/>}/>

      </Routes>

    </BrowserRouter>
  </div>
}

export default App
