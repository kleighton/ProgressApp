import widgetTemplate from './widgetTemplate';

export default function renderUserWidgets(){
  var pageContainer = document.getElementsByClassName('pageContent')[0];
  
  var numOfUsers = 20;
  for (var i=0;i < numOfUsers;i++){
    var widget = new widgetTemplate('Test User',25);
    var content = document.createElement('p');
    content.innerHTML = 'User widget content example.';
    widget.appendContent(content);
    widget.appendWidget(pageContainer);
  }
}