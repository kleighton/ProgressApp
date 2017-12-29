import NavBar from './navbar';
import Header from './header';
import renderDashboardWidgets from './dashboardWidgets';
import renderUserWidgets from './usersWidgets';

//LAYOUT CONSTRUCTOR
function layoutConstructor(){
  const appContainer = document.getElementById('appContainer');
  const navBar = new NavBar();
  const header = new Header();
  const pageContent = document.createElement('div');
  pageContent.className = 'pageContent';
  appContainer.appendChild(pageContent);
  function renderContent(path){
    pageContent.innerHTML = '';
    if (path == ''){
      renderDashboardWidgets();
      header.renderHeaderTitle('Dashboard');
    }
    else if (path == '#users'){
      renderUserWidgets();
      header.renderHeaderTitle('Users');
    }
    else if (path == '#reports'){
      header.renderHeaderTitle('Reports');
    }
    else if (path == '#account'){
      header.renderHeaderTitle('My Account');
    }
  };
  return {
    renderContent:renderContent
  };
};
const initialLayout = layoutConstructor();
initialLayout.renderContent(window.location.hash);

export default initialLayout;
