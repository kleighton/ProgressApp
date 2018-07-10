import widgetTemplate from '../components/widgetTemplate';

function dashboard(){
  var pageContainer = document.getElementsByClassName('pageContent')[0];

  var widgetOne = new widgetTemplate('Status',50, pageContainer, 'widgetOne');
  var widgetTwo = new widgetTemplate('Event Feed',50, pageContainer, 'widgetTwo');
  var widgetThree = new widgetTemplate('Items',100, pageContainer, 'widgetThree');

  var content1 = document.createElement('p');
  var content2 = document.createElement('p');
  var content3 = document.createElement('p');
  content1.innerHTML = 'Here is some test content for each of the widgets on the dashboard.';
  content2.innerHTML = 'Here is some test content for each of the widgets on the dashboard.';
  content3.innerHTML = 'Here is some test content for each of the widgets on the dashboard.';
  widgetOne.appendContent(content1);
  widgetTwo.appendContent(content2);
  widgetThree.appendContent(content3);

}

module.exports = dashboard;
