import { Menu } from '@primereact/ui/menu';
import { NavigationMenu } from '@primereact/ui/navigationmenu';
import { NavLink } from 'react-router';


function AppMenu() {
  return (
    <div className="flex justify-center">
      <NavigationMenu>
        <Menu.Root>
          <NavLink to="/">
            <Menu.Item>
              Home
            </Menu.Item>
          </NavLink>
        </Menu.Root>
        <Menu.Root>
          <Menu.Item>
            Em promoção
          </Menu.Item>
        </Menu.Root>
        <Menu.Root>
          <Menu.Item>
            Achadinhos
          </Menu.Item>
        </Menu.Root>
      </NavigationMenu>
    </div>
  );
}

export default AppMenu