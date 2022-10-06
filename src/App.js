import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewProfile from "./pages/NewProfile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add" element={<NewProfile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
