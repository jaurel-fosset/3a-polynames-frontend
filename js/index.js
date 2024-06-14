import { MenuView } from "./js/views/menu"

function run()
{
    const menuView = new MenuView();
    menuView.display();
}
document.addEventListener('load', run)