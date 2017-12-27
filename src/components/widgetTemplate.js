//WIDGET TEMPLATE COMPONENT
export default function widgetTemplate(title){
  var widget = document.createElement('div');
  var widgetHeader = document.createElement('div');
  var widgetHeaderTitle = document.createElement('div');
  var widgetContent = document.createElement('div');
  var appendContent = function(content){
    widgetContent.appendChild(content);
  };
  var appendWidget = function(container){
    container.appendChild(widget);
  };
  widget.className = 'widget';
  widgetHeader.className = 'widgetHeader';
  widgetHeaderTitle.className = 'widgetHeaderTitle';
  widgetContent.className = 'widgetContent';
  widgetHeaderTitle.innerHTML = title;
  widgetHeader.appendChild(widgetHeaderTitle);
  widget.appendChild(widgetHeader);
  widget.appendChild(widgetContent);
  return {
    appendContent:appendContent,
    appendWidget:appendWidget
  }
}