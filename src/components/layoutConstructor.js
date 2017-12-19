import NavBar from './navbar';
import Header from './header';

//LAYOUT CONSTRUCTOR
export default function layoutConstructor(){
  const appContainer = document.getElementById('appContainer');
  const navBar = new NavBar();
  const header = new Header();
}
