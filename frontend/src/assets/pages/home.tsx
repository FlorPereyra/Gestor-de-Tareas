import { useState } from 'react';
import { NavBar, NavBarMobile } from '../components/navbar';
import { SideBar } from '../components/sidebarhome';
import { Workspace, NameWorkspace} from '../components/workspace';

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
      <div className='flex h-screen w-screen pt-5'>
        <SideBar theme={theme}/>
        <div className={`p-7 ${theme ? 'dark:bg-[#031124]' : 'bg-[#dff5ed]'}  w-screen ${theme ? 'dark:text-darkmode-verdeagua1' : 'text-lightmode-azul'} text-xl h-screen`}>
          <div className='py-3 z-2'>
            <h1 className=''>Opened Recently</h1>
            <ul>
              
            </ul>
          </div>
          <div className=''>
            <h1 className='pb-3'>Your Workspaces</h1>
            
            <span className='cursor-pointer text-m pt-3' onClick={() => setShow(!show)}>New workspace</span>

            {show && <NameWorkspace addWorkspace={addWorkspace} close={() => setShow(!show)} theme={theme}/>}

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
