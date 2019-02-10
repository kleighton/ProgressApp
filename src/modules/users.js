import widgetTemplate from '../components/widgetTemplate';

var users = function(){
  var pageContainer = document.getElementsByClassName('pageContent')[0];
  
  var numOfUsers = 15;
  for (var i=0;i < numOfUsers;i++){
    var widget = new widgetTemplate('Test User',25);
    var content = document.createElement('p');
    content.innerHTML = 'User widget content example.';
    widget.appendContent(content);
    widget.appendWidget(pageContainer);
  }
}

module.exports = users;