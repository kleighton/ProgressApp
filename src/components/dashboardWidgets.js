import widgetTemplate from './widgetTemplate';
import BarChart from './charts/barChart';
import DonutChart from './charts/donutChart';

export default function renderDashboardWidgets(){
  var pageContainer = document.getElementsByClassName('pageContent')[0];

  var widgetOne = new widgetTemplate('Status',70, 'widgetOne');
  widgetOne.appendWidget(pageContainer);
  widgetOne.widgetContent.style.textAlign = 'center';
  var chartOne = new DonutChart(null, 'widgetOne', donutData1, 'Hours', 'Test');
  var chartTwo = new DonutChart(null, 'widgetOne', donutData2, 'Hours', 'Test');
  var chartThree = new DonutChart(null, 'widgetOne', donutData3, 'Hours', 'Test');
  var chartFour = new DonutChart(null, 'widgetOne', donutData4, 'Hours', 'Test');

  var widgetTwo = new widgetTemplate('User Widget',30,'widgetTwo');
  widgetTwo.appendWidget(pageContainer);
  widgetTwo.widgetContent.style.textAlign = 'center';
  var chartFour = new DonutChart(null, 'widgetTwo', donutData5, 'Hours', 'Test');
  

  var widgetFour = new widgetTemplate('User Widget',100);
  widgetFour.appendWidget(pageContainer);
  var contentOne = document.createElement('p');
  var contentTwo = document.createElement('p');
  contentOne.innerHTML = 'This is an example of a user widget.';
  contentTwo.innerHTML = 'Lorem ipsum the way the widget is appended to its parent contianer';
  widgetFour.appendContent(contentOne);
  widgetFour.appendContent(contentTwo);
}

//TEST DATA
var paycodeColors = {
  reg: '#42d9f4',
  ot1: '#50b0e0',
  ot2: '#408ebc',
  vac: '#0F5176',
  sic: '#ff6a00',
  oth: '#e25007',
  hol: '#46d313',
  empty: '#eaeaef'
}
var barData = [
  {
      subItems: [
          {
              name: 'Expenses',
              count: 43,
              color: paycodeColors.reg
          }
      ],
      name: 'January'
  },
  {
      subItems: [
          {
              name: 'Expenses',
              count: 20,
              color: paycodeColors.reg
          }
      ],
      name: 'February'
  },
  {
      subItems: [
          {
              name: 'Expenses',
              count: 34.50,
              color: paycodeColors.reg
          }
      ],
      name: 'March'
  },
  {
      subItems: [
          {
              name: 'Expenses',
              count: 11,
              color: paycodeColors.reg
          }
      ],
      name: 'April'
  },
  {
      subItems: [
          {
              name: 'Expenses',
              count: 25.50,
              color: paycodeColors.reg
          }
      ],
      name: 'May'
  },
  {
      subItems: [
          {
              name: 'Expenses',
              count: 40,
              color: paycodeColors.reg
          }
      ],
      name: 'June'
  },
  {
      subItems: [
          {
              name: 'Expenses',
              count: 46,
              color: paycodeColors.reg
          }
      ],
      name: 'July'
  },

];
var donutData1 = [
  {
      type: 'REG',
      color: paycodeColors.reg,
      count: 50
  },
  {
      type: 'OT1',
      color: paycodeColors.empty,
      count: 5
  }
];
var donutData2 = [
  {
      type: 'REG',
      color: paycodeColors.reg,
      count: 30
  },
  {
      type: 'OT1',
      color: paycodeColors.empty,
      count: 20
  }
];
var donutData3 = [
  {
      type: 'REG',
      color: paycodeColors.reg,
      count: 55.06
  },
  {
      type: 'OT1',
      color: paycodeColors.empty,
      count: 15
  }
];
var donutData4 = [
  {
      type: 'REG',
      color: paycodeColors.reg,
      count: 14.08
  },
  {
      type: 'OT1',
      color: paycodeColors.empty,
      count: 20
  }
];
var donutData5 = [
  {
      type: 'REG',
      color: paycodeColors.hol,
      count: 14.08
  },
  {
      type: 'OT1',
      color: paycodeColors.empty,
      count: 20
  }
];