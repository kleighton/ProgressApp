//HEADER COMPONENT
export default function Header() {
  const appContainer = document.getElementById('appContainer');
  const headerContainer = document.createElement('div');
  headerContainer.className = 'headerContainer';
  appContainer.appendChild(headerContainer);
}