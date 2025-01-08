import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Progress } from './pages/Progress';
import { Contact } from './pages/Contact';
import { Layout } from './components/GlobalComps/Layout';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Progress" element={<Progress/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
