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
  // specify 'dark-theme' or 'light-theme' in the new NavBar instance.
  const colorTheme = 'dark-theme';

  new NavBar(colorTheme);
  const header = new Header(colorTheme);
  const pageContent = document.createElement('div');
  if (colorTheme === "light-theme"){
    pageContent.className = 'pageContent';
  } else if (colorTheme === "dark-theme") {
    pageContent.className = 'pageContent dark-theme';
  }
  appContainer.appendChild(pageContent);

  header.renderHeaderProfile('Test User');

  function renderContent(path){
    pageContent.innerHTML = '';
    if (path == '/' || path == '/dashboard'){
      dashboard(colorTheme);
      header.renderHeaderTitle('Dashboard');
    }
    else if (path == '/organizations'){
      header.renderHeaderTitle('Organizations');
    }
    else if (path == '/fundraisers'){
      fundraisers(colorTheme);
      header.renderHeaderTitle('Fundraisers');
    }
    else if (path == '/people'){
      users(colorTheme);
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
