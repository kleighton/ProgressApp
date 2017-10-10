import './index.css'; 
import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `
    <div class="user">
      <div><a href="#" data-id="${user.id}" class="deleteuser">Delete</a></div>
      <div>${user.id}</div>
      <div>${user.firstName}</div>
      <div>${user.lastName}</div>
      <div>${user.email}</div>
    </div>
    `
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteuser');

  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});