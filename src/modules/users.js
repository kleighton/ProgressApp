import widgetTemplate from '../components/widgetTemplate';
import lineItem from '../components/lineItem';

function users(){
  var pageContainer = document.getElementsByClassName('pageContent')[0];
  
  var numOfUsers = 50;
  for (var i=0;i < numOfUsers;i++){
    var widget = new widgetTemplate('Test User',25);
    var content = document.createElement('p');
    content.innerHTML = 'User widget content example.';
    widget.appendContent(content);
    widget.appendWidget(pageContainer);
  }
}

module.exports = users;