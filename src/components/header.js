/* Header Component*/
import PrimaryBtn from '../utilities/buttons';

var Header = function(style) {
  const appContainer = document.getElementById('appContainer');
  var headerContainer = document.createElement('div');
  const headerTitle = document.createElement('div');
  const headerAccount = document.createElement('div');
  const headerProfile = document.createElement('div');
  var headerProfileDropdown = document.createElement('div');

  headerContainer.className = 'headerContainer';
  headerTitle.className = 'headerTitle';
  headerAccount.className = 'headerAccount';
  headerProfile.className = 'headerProfile';
  headerProfileDropdown.className = 'headerProfileDropdown';

  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerAccount);
  headerAccount.appendChild(headerProfile);
  headerAccount.appendChild(headerProfileDropdown);

  const addBtn = new PrimaryBtn('');
  headerContainer.appendChild(addBtn.btn);
  addBtn.btn.style.display = 'none';

  if (style === "light-theme"){
    headerContainer.className = 'headerContainer';
  } else if (style === "dark-theme") {
    headerContainer.className = 'headerContainer dark-theme';
  }

  /* Render to DOM */
  appContainer.appendChild(headerContainer);

  /* Methods */
  function renderHeaderTitle(title) {
    headerTitle.innerHTML = title;
    if (title != 'Dashboard') {
      addBtn.btn.style.display = 'inline';
      addBtn.update('Add ' + title)
    } else {
      addBtn.btn.style.display = 'none';
    }
  }

  function renderHeaderAccount(account) {
    headerAccount.innerHTML = account + '<i class="material-icons">account_circle</i>';
  }

  function renderHeaderProfile(user) {
    const userName = document.createElement('div');
    headerProfile.appendChild(userName);
    userName.innerHTML = user;
    userName.className = 'headerUserName';
    headerProfileDropdown.innerHTML = '<i class="material-icons">person</i>';
  }

  function toggleTheme(color){
    if (color === "light-theme"){
      headerContainer.className = 'headerContainer';
    } else if (color === "dark-theme") {
      headerContainer.className = 'headerContainer dark-theme';
    }
  }

  return {
    renderHeaderTitle: renderHeaderTitle,
    renderHeaderAccount: renderHeaderAccount,
    renderHeaderProfile: renderHeaderProfile,
    profileIcon: headerAccount,
    theme: toggleTheme
  }
};

module.exports = Header;