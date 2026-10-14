
import { Outlet } from 'react-router'
import AppMenu from './components/menu/AppMenu';
import { InputGroup } from '@primereact/ui/inputgroup'
import { InputText } from '@primereact/ui/inputtext';
import AppAlertTop from "./components/alert-top/AppAlertTop"
import AppFooter from "./components/footer/AppFooter"

function App() {
  return <div className='w-full'>
    <AppAlertTop />
    <div className='flex justify-center'>
      <header className='flex w-300'> 
        <div className='w-full flex justify-between items-center py-4'>
          <h3 className='logo-brand text-3xl'>SHOP.CO</h3>
          <div className='flex items-center'>
            <AppMenu /> 
            <form className='w-150'>
              <InputGroup.Root>
                <InputGroup.Addon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471s336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527" /></svg>
                </InputGroup.Addon>
                <InputText placeholder="Pesquisar" />
              </InputGroup.Root>
            </form>
          </div>
          <div className="actions flex items-center gap-2">
            <div className="cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80m-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80" /></svg>
            </div>
            <div className="profile-account">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 21 21">
                <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="M14.5 13.5c-.662-2.274-3.2-3.025-6-3.025c-2.727 0-5.27.869-6 3.025" /><path d="M8.5 2.5a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0v-2a3 3 0 0 1 3-3" /></g></svg>
            </div>
          </div>
        </div>  
      </header>
    </div>
    <div className='flex justify-center mb-8'>
      <main className='w-300'>
        <Outlet />
      </main>
    </div>
    <AppFooter />
  </div>;
}

export default App;
