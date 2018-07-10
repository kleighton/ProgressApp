import NavBar from '../components/navbar';
import Header from '../components/header';
import dashboard from '../modules/dashboard';
import users from '../modules/users';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const location = history.location;

function layoutConstructor(){ 
  const appContainer = document.getElementById('appContainer');
  new NavBar();
  const header = new Header();
  const pageContent = document.createElement('div');
  pageContent.className = 'pageContent';
  appContainer.appendChild(pageContent);

  header.renderSubTaskBtn('Cancel');
  header.renderTaskBtn('Add Task');

  function renderContent(path){
    pageContent.innerHTML = '';
    if (path == '/' || path == '/dashboard'){
      dashboard();
      header.renderHeaderTitle('Dashboard');
    }
    else if (path == '/users'){
      users();
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
console.log(location.pathname);
layout.renderContent(location.pathname);

export default layout;
