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
  var colorTheme = 'dark-theme';

  var navbar = new NavBar(colorTheme);
  var header = new Header(colorTheme);
  var pageContent = document.createElement('div');
  if (colorTheme === "light-theme"){
    pageContent.className = 'pageContent';
  } else if (colorTheme === "dark-theme") {
    pageContent.className = 'pageContent dark-theme';
    appContainer.className = 'dark-theme';
  }
  appContainer.appendChild(pageContent);

  header.renderHeaderProfile('Test User');

  var themeToggle = header.profileIcon;
  themeToggle.addEventListener('click',function(){
    if (colorTheme === "light-theme"){
      colorTheme = 'dark-theme'
      appContainer.className = 'dark-theme';
    } else if (colorTheme === 'dark-theme') {
      colorTheme = "light-theme";
      appContainer.className = '';
    }
    toggleTheme();
  });

  function toggleTheme(){
    navbar.theme(colorTheme);
    header.theme(colorTheme);
    navbar.theme(colorTheme);
    if (colorTheme === "light-theme"){
      pageContent.className = 'pageContent';
    } else if (colorTheme === "dark-theme") {
      pageContent.className = 'pageContent dark-theme';
      appContainer.className = 'dark-theme';
    }
  }

  function renderContent(path){
    pageContent.innerHTML = '';
    if (path == '/' || path == '/dashboard'){
      dashboard(colorTheme);
      header.renderHeaderTitle('Dashboard');
    }
    else if (path == '/fundraisers'){
      fundraisers(colorTheme);
      header.renderHeaderTitle('Fundraisers');
    }
    else if (path == '/people'){
      users(colorTheme);
      header.renderHeaderTitle('People');
    }
    else if (path == '/settings'){
      header.renderHeaderTitle('settings');
    }
  }
  return {
    renderContent:renderContent
  };
}
var layout = layoutConstructor();
layout.renderContent(location.pathname);

export default layout;
