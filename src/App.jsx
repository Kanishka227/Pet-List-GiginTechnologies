import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PetDescript from "./pages/PetDescript"
import SearchedPets from "./pages/SearchedPets"

function App() {

  return (
      <BrowserRouter>
          <Routes> 
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/pet" element={<PetDescript/>}></Route>
            <Route exact path="/search" element={<SearchedPets/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
