//HEADER COMPONENT
export default function Header() {
  const appContainer = document.getElementById('appContainer');
  const headerContainer = document.createElement('div');
  const headerTitle = document.createElement('div');
  const headerAccount = document.createElement('div');

  headerContainer.className = 'headerContainer';
  headerTitle.className = 'headerTitle';
  headerAccount.className = 'headerAccount';

  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerAccount);
  appContainer.appendChild(headerContainer);

  function renderHeaderTitle(title){
    headerTitle.innerHTML = title;
  }
  function renderHeaderAccount(account){
    headerAccount.innerHTML = account + '<i class="material-icons">account_circle</i>';
  }
  return {
    renderHeaderTitle:renderHeaderTitle,
    renderHeaderAccount:renderHeaderAccount
  }
}