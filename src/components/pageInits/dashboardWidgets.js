import widgetTemplate from '../widgetTemplate';

export default function renderDashboardWidgets(){
  var pageContainer = document.getElementsByClassName('pageContent')[0];

  var widgetOne = new widgetTemplate('Status',100, 'widgetOne');
  widgetOne.appendWidget(pageContainer);

}
