import widgetTemplate from './widgetTemplate';

export default function renderDashboardWidgets(){
  var pageContainer = document.getElementsByClassName('pageContent')[0];
  var widgetOne = new widgetTemplate('Status',100);
  widgetOne.appendWidget(pageContainer);
  var contentOne = document.createElement('p');
  contentOne.innerHTML = 'This is where you can view the status of your account.';
  widgetOne.appendContent(contentOne);

  var widgetTwo = new widgetTemplate('Event Feed',70);
  widgetTwo.appendWidget(pageContainer);
  var contentOne = document.createElement('p');
  contentOne.innerHTML = 'This is where you can view a live event feed of your account.';
  widgetTwo.appendContent(contentOne);

  var widgetThree = new widgetTemplate('User Widget',30);
  widgetThree.appendWidget(pageContainer);
  var contentOne = document.createElement('p');
  contentOne.innerHTML = 'This is an example of a user widget.';
  widgetThree.appendContent(contentOne);
}

