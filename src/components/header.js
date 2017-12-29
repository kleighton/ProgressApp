//HEADER COMPONENT
export default function Header() {
  const appContainer = document.getElementById('appContainer');
  const headerContainer = document.createElement('div');
  const headerTitle = document.createElement('div');
  headerContainer.className = 'headerContainer';
  headerTitle.className = 'headerTitle';
  headerContainer.appendChild(headerTitle);
  appContainer.appendChild(headerContainer);
  function renderHeaderTitle(title){
    headerTitle.innerHTML = title;
  }
  return {
    renderHeaderTitle:renderHeaderTitle
  }
}