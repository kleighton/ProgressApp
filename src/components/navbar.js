//NAV BAR COMPONENT
const navItems = [{
    path: '/',
    text: 'Dashboard',
    icon: 'camera'
  },
  {
    path: '/users',
    text: 'Users',
    icon: 'person'
  },
  {
    path: '/reports',
    text: 'Reports',
    icon: 'insert_chart'
  },
  {
    path: '/account',
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
    });
    if (item.path == window.location.pathname){
      navItem.className = 'navItem active';
    }
  });
  appContainer.appendChild(navContainer);
}