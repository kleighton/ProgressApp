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
  function renderTaskBtn(txt){
    var btn = document.createElement('div');
    btn.className = 'c-primary-btn';
    btn.innerHTML = txt;
    headerAccount.appendChild(btn);
  }
  function renderSubTaskBtn(txt){
    var btn = document.createElement('div');
    btn.className = 'c-secondary-btn';
    btn.innerHTML = txt;
    headerAccount.appendChild(btn);
  }
  return {
    renderHeaderTitle:renderHeaderTitle,
    renderHeaderAccount:renderHeaderAccount,
    renderTaskBtn:renderTaskBtn,
    renderSubTaskBtn: renderSubTaskBtn
  }
}