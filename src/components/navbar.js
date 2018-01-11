import layoutConstructor from './layoutConstructor';

//NAV BAR COMPONENT
const navItems = [{
    path: '#dashboard',
    text: 'Dashboard',
    icon: 'camera'
  },
  {
    path: '#users',
    text: 'Users',
    icon: 'person'
  },
  {
    path: '#reports',
    text: 'Reports',
    icon: 'insert_chart'
  },
  {
    path: '#account',
    text: 'My Account',
    icon: 'settings'
  }
];

export default function NavBar() {
  const appContainer = document.getElementById('appContainer');
  const navContainer = document.createElement('div');
  navContainer.className = 'navContainer';
  navItems.forEach(function (item) {
    const navItem = document.createElement('div');
    navItem.className = 'navItem';
    navItem.innerHTML = '<i class="material-icons">'+item.icon+'</i><span class="navItemTool">'+item.text+'</span>';
    navContainer.appendChild(navItem);
    navItem.addEventListener('click', function () {
      window.location = item.path;
      document.title = item.text;
      layoutConstructor.renderContent(item.path);
    });
    if (item.path == window.location.hash){
      navItem.className = 'navItem active';
    }
    if (item.path == '#dashboard' && window.location.hash == ''){
      navItem.className = 'navItem active';
      document.title = item.text;
    }
    window.addEventListener('hashchange',function(){
      if (item.path == window.location.hash){
        navItem.className = 'navItem active';
      }
      else {
        navItem.className = 'navItem';
      }
    });
    
  });
  appContainer.appendChild(navContainer);
}