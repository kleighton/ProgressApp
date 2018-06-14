import NavBar from './components/navbar';
import Header from './components/header';
import renderDashboardWidgets from './pageInits/dashboardWidgets';
import renderUserWidgets from './pageInits/usersWidgets';

//LAYOUT CONSTRUCTOR
function layoutConstructor(){
  const appContainer = document.getElementById('appContainer');
  const navBar = new NavBar();
  const header = new Header();
  const pageContent = document.createElement('div');
  pageContent.className = 'pageContent';
  appContainer.appendChild(pageContent);

  header.renderHeaderAccount('Demo Account');

  function renderContent(path){
    pageContent.innerHTML = '';
    if (path == '' || path == '#dashboard'){
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
