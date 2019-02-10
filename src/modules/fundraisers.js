import widgetTemplate from '../components/widgetTemplate';

var fundraisers = function (){
  var pageContainer = document.getElementsByClassName('pageContent')[0];
  
  var numOfUsers = 18;
  for (var i=0;i < numOfUsers;i++){
    var widget = new widgetTemplate('Test Fundraiser',25);
    var content = document.createElement('p');
    content.innerHTML = 'Fundraiser widget content example.';
    widget.appendContent(content);
    widget.appendWidget(pageContainer);
  }
}

module.exports = fundraisers;