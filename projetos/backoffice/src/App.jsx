import { Outlet } from 'react-router';
import AppMenu from './components/menu/AppMenu'

function App() {
  return (
    <>
      <div className='px-4 pt-2'>
        <header>
          <AppMenu />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          FOORTER
        </footer>
      </div>
    </>
  )
}

export default App
