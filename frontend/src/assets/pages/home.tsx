import { useState } from 'react';
import { NavBar, NavBarMobile } from '../components/navbar';
import { SideBar } from '../components/sidebarhome';
import { Workspace, NameWorkspace} from '../components/workspace';
import { Route, Routes } from 'react-router-dom';
import Stadistics from './stadistics';
import Calendar from './calendar';
import Board from './board';

function Home() {
  const [show, setShow] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const [theme, setTheme] = useState(true); //true for dark (default), false for lightmode
  
  function addWorkspace(wksp) {
    setWorkspaces([...workspaces, {title: wksp, isEditing: false}])
  }

  function deleteWorkspace(title) {
    setWorkspaces(workspaces.filter(wksp => wksp.title !== title))
  }

  function editWorkspace(title) {
    setWorkspaces(workspaces.map(wksp => wksp.title === title ? {... wksp, isEditing: !wksp.isEditing} : wksp))
  }

  function editName(title, item) {
    setWorkspaces(workspaces.map(wksp => wksp === item ? {... item, title, isEditing: !wksp.isEditing} : wksp))
  }
  
  return (
    <>
      <NavBar theme={theme} changeTheme={() => {setTheme(!theme)}}/>
      <NavBarMobile theme={theme}/>
      <div>
       <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/stats' element={<Stadistics/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/boards' element={<Board/>}/>
       </Routes>   
      </div>
      <div className='flex desktop:pt-5 min-h-screen w-screen'>
        <SideBar theme={theme}/>
        <div className={`desktop:p-7 mobile:p-4 ${theme ? 'dark:bg-[#031124]' : 'bg-[#dff5ed]'}  ${theme ? 'dark:text-[#C6EDF6]' : 'text-lightmode-azul'} desktop:text-xl w-screen`}>
          <div className='py-3 z-2'>
            <h1 className=''>Opened Recently</h1>
            <ul>
              
            </ul>
          </div>
          <div>
            <h1 className='pb-3'>Your Workspaces</h1>
            
            {!show ? <button className={`cursor-pointer text-sm ${theme ? 'bg-[#C6EDF6]' : 'bg-lightmode-azul'} ${theme ? 'text-darkmode-azul2' : 'text-lightmode-blanco'} ${theme ? 'shadow-lg shadow-[#031124]' : 'shadow-lg shadow-[#dff5ed]'} p-2 rounded-md`} onClick={() => setShow(!show)}>New workspace</button> : <NameWorkspace addWorkspace={addWorkspace} close={() => setShow(!show)} theme={theme}/>}

            {workspaces.map((wksp, index) => (
              
              <Workspace wksp={wksp} key={index} deleteWorkspace={deleteWorkspace} theme={theme} editWorkspace={editWorkspace} editName={editName}/>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
