import NavBar from './navbar';
import Header from './header';
import renderDashboardWidgets from './dashboardWidgets';

//LAYOUT CONSTRUCTOR
export default function layoutConstructor(){
  const appContainer = document.getElementById('appContainer');
  const navBar = new NavBar();
  const header = new Header();
  const pageContent = document.createElement('div');
  pageContent.className = 'pageContent';
  appContainer.appendChild(pageContent);
  renderDashboardWidgets();
}
