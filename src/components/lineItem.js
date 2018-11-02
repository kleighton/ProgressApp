//WIDGET TEMPLATE COMPONENT
export default function listTemplate(container,id){
  var item = document.createElement('div');
  if (id){
    widgetContent.setAttribute('id',id);
  }

  item.className = 'line-item';

  if (container != null){
    appendWidget(container);
  }

  return {
    
  }
}