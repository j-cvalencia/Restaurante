import { Header } from './Components/Header/Header'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Inicio} from "./pages/Inicio";
import {Menú} from "./pages/Menú";
import './App.css'

function App() {

  return (
    <BrowserRouter basename='/Restaurante'>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/menú' element={<Menú/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App