import { ShoppingBag } from '@primeicons/react/shopping-bag';
import { Home } from '@primeicons/react/home';
import { NavLink } from 'react-router';


export default function AppMenu() {
    return (
        <nav className="flex justify-between items-center">
            <h3 className='text-3xl'>SHOP.CO</h3>
            <div className='flex gap-7'>
                <NavLink to='/' className="flex gap-2 items-center">
                    <Home /> Dashboard
                </NavLink>
                <NavLink to='products' className="flex gap-2 items-center">
                    <ShoppingBag /> Produtos
                </NavLink>
            </div>
            <div>
                acoes
            </div>
        </nav>
    );
}
