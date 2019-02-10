/* eslint-disable import/default */
import NavBar from '../components/navbar';
import Header from '../components/header';
import dashboard from '../modules/dashboard';
import users from '../modules/users';
import fundraisers from '../modules/fundraisers';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const location = history.location;

function layoutConstructor(){ 
  const appContainer = document.getElementById('appContainer');
  new NavBar(1);
  const header = new Header();
  const pageContent = document.createElement('div');
  pageContent.className = 'pageContent';
  appContainer.appendChild(pageContent);

  header.renderHeaderProfile('Test User');

  function renderContent(path){
    pageContent.innerHTML = '';
    if (path == '/' || path == '/dashboard'){
      dashboard();
      header.renderHeaderTitle('Dashboard');
    }
    else if (path == '/organizations'){
      header.renderHeaderTitle('Organizations');
    }
    else if (path == '/fundraisers'){
      fundraisers();
      header.renderHeaderTitle('Fundraisers');
    }
    else if (path == '/people'){
      users();
      header.renderHeaderTitle('People');
    }
  }
  return {
    renderContent:renderContent
  };
}
const layout = layoutConstructor();
layout.renderContent(location.pathname);

export default layout;
