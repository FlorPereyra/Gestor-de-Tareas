import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home'
import Seccion2 from './Taablers';
import Stats from './stadistics';
import MyApp from './calendar';
import Error from './404';


function App() {
  
  return(
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path= '/taablers' element={<Seccion2/>}/>
      <Route path= '/stadistics' element={<Stats/>}/>
      <Route path= '/calendar' element= {<MyApp/>} />
      <Route path= '/404' element= {<Error/>} />

    </Routes>
    </BrowserRouter>
  )
 
}


export default App
