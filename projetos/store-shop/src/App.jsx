
import { Outlet } from 'react-router'
import AppMenu from './components/menu/AppMenu';
function App() {
  return <>
    <header className='bg-primary rounded-border p-4 border'>
      <AppMenu />      
    </header>
    <main  className='bg-primary rounded-border p-4 border'>
      <Outlet />
    </main>
    <footer><p>FOOTER</p></footer>
  </>;
}

export default App;
