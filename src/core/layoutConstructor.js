import NavBar from '../components/navbar';
import Header from '../components/header';
import renderDashboardWidgets from '../components/pageInits/dashboardWidgets';
import renderUserWidgets from '../components/pageInits/usersWidgets';

function layoutConstructor(){ 
  const appContainer = document.getElementById('appContainer');
  new NavBar();
  const header = new Header();
  const pageContent = document.createElement('div');
  pageContent.className = 'pageContent';
  appContainer.appendChild(pageContent);

  //header.renderHeaderAccount('Demo Account');
  header.renderSubTaskBtn('Cancel');
  header.renderTaskBtn('Add Task');

  function renderContent(path){
    pageContent.innerHTML = '';
    if (path == '' || path == '/dashboard'){
      renderDashboardWidgets();
      header.renderHeaderTitle('Dashboard');
    }
    else if (path == '/users'){
      renderUserWidgets();
      header.renderHeaderTitle('Users');
    }
    else if (path == '/reports'){
      header.renderHeaderTitle('Reports');
    }
    else if (path == '/account'){
      header.renderHeaderTitle('My Account');
    }
  }
  return {
    renderContent:renderContent
  };
}
const layout = layoutConstructor();
layout.renderContent(window.location.hash);

export default layout;
