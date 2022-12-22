import { Routes, Route } from "react-router-dom"
import App from "../components/App"
import Header from "../components/Header"
import ShowDetail from "../components/ShowDetail"

export default function Paths (){
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/shows" element={<p>Shows</p>}/>
        <Route path="/people" element={<p>People</p>}/>
        <Route path="/networks" element={<p>Networks</p>}/>
        <Route path="/showdetail/:idShow" element={<ShowDetail/>}/>
      </Routes>    
    </>
  )
}