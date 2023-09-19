import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Login }  from './login';
import PrivateRoutes from '../components/privateRoutes';
import Home from './home';
import Board from './board';
import Stats from './stadistics';
import MyApp from './calendar';
import Error from './404';
import { AboutUsPage } from './aboutUs';


function App() {
  const [user] = useState ({name: '', isAuthenticated: true})

  // const login = (username) => {
  //   setUser({name: username, isAuthenticated: true})
  // }
  
  // const logout = () => {
  //   setUser({name: '', isAuthenticated: false})
  // }

  return(
 <BrowserRouter>
    <Routes >
      <Route element={<PrivateRoutes auth={user}/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="/boards/:tablerosid" element={<Board />} />
        <Route path= '/stats' element={<Stats/>}/>
        <Route path= '/calendar' element= {<MyApp/>} />
        <Route path='/about-us' element={<AboutUsPage/>} />
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path= '*' element= {<Error/>} /> 
    </Routes>
    </BrowserRouter>
  )
 
}


export default App