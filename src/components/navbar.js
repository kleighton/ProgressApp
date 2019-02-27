import layoutConstructor from '../core/layoutConstructor';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const location = history.location;

//NAV BAR COMPONENT
const navItems = [{
    path: '/dashboard',
    text: 'Dashboard',
    icon: 'camera'
  },
  {
    path: '/organizations',
    text: 'Organizations',
    icon: 'person'
  },
  {
    path: '/fundraisers',
    text: 'Fundraisers',
    icon: 'insert_chart'
  },
  {
    path: '/people',
    text: 'People',
    icon: 'settings'
  }
];

var NavBar = function(style) {
  var appContainer = document.getElementById('appContainer');
  var navContainer = document.createElement('div');
  if (style === "light-theme"){
    navContainer.className = 'navContainer';
  } else if (style === "dark-theme") {
    navContainer.className = 'navContainer dark-theme';
  }
  navItems.forEach(function (item) {
    const navItem = document.createElement('div');
    navItem.className = 'navItem';
    navItem.innerHTML = '<i class="material-icons">'+item.icon+'</i>' + item.text;
    navContainer.appendChild(navItem);
    navItem.addEventListener('click', function () {
      history.push(item.path, {state: item.path});
      document.title = item.text + ' | ProgressHub';
      layoutConstructor.renderContent(item.path);
    });
    if (item.path == location.pathname){
      navItem.className = 'navItem active';
    }
    if (item.path == '/dashboard' && location.pathname == '/'){
      navItem.className = 'navItem active';
      document.title = item.text + ' | ProgressHub';
    }
    history.listen(function(location){
      if (item.path == location.pathname){
        navItem.className = 'navItem active';
        layoutConstructor.renderContent(item.path);
      }
      else {
        navItem.className = 'navItem';
      }
    });
    
  });

  function toggleTheme(color){
    if (color === "light-theme"){
      navContainer.className = 'navContainer';
    } else if (color === "dark-theme") {
      navContainer.className = 'navContainer dark-theme';
    }
  }
  appContainer.appendChild(navContainer);

  return {
    theme: toggleTheme
  }
}
module.exports = NavBar;