// export default function BarChart(containerId, data, labelPrefix) {
//     var container = document.getElementById(containerId);

//     var verticalLineContainer = document.createElement('div');
//     verticalLineContainer.className = 'verticalLineContainer';

//     var barContainer = document.createElement('div');
//     barContainer.className = 'barContainer';

//     var prefix = labelPrefix || '';

//     barContainer.appendChild(verticalLineContainer);
//     container.appendChild(barContainer);

//     var VerticalLine = function (label,height) {
//         var line = document.createElement('div');
//         line.className = 'verticalLine';
//         verticalLineContainer.appendChild(line);
//         line.style.bottom = height + '%';

//         var lineLabel = document.createElement('div');
//         lineLabel.className = 'lineLabel';
//         lineLabel.innerHTML = label;
//         line.appendChild(lineLabel);
//     };

//     var largestItemNumber = 0;
//     for (var a = 0; data[a]; a++) {
//         var totalItemNumber = 0;
//         for (var b = 0; data[a].subItems[b]; b++) {
//             totalItemNumber += data[a].subItems[b].count;
//         };
//         if (totalItemNumber > largestItemNumber) {
//             largestItemNumber = Math.ceil(totalItemNumber / 10) * 10;
//         }
//     };

//     var barItems = [];

//     var applyTotals = function (totalData) {
//         verticalLineContainer.innerHTML = '';
//         var total = totalData;
//         var half = total / 2;
//         new VerticalLine(total, 100);
//         new VerticalLine(half, 50);
//         new VerticalLine(0, 0);
//     };
//     var applyData = function (data) {
//         var dataCount = data.length;
//         for (var i = 0; data[i]; i++) {
//             var barItem = new BarItemContainer(data[i], dataCount, barContainer, largestItemNumber, prefix);
//             barItems.push(barItem);
//         };
//     };
//     var updateTotals = function () {
//         for (c = 0; barItems[c]; c++) {
//             barItems[c].updateTotals();
//         };
//     };
//     applyTotals(largestItemNumber);
//     applyData(data);

// };

// //BAR CHART ITEM CONSTRUCTOR
// var BarItemContainer = function (data, totalCount, cont, largestNum, prefix) {
//     var items = [];
//     var containerWrapper = cont;
//     var container = document.createElement('div');
//     container.className = 'barItemContainer';
//     container.style.height = '100%';
//     containerWrapper.appendChild(container);

//     var subItemContainer = document.createElement('div');
//     subItemContainer.className = 'subItemContainer';
//     container.appendChild(subItemContainer);

//     var itemTotalLabel = document.createElement('div');
//     itemTotalLabel.className = 'itemTotalLabel';
//     subItemContainer.appendChild(itemTotalLabel);

//     var width = (100 / totalCount);
//     container.style.width = 'calc(' + width + '% - 5px)';

//     var highestNumber = largestNum;
//     var itemTotalNumber = 0;

//     for (var j = 0; data.subItems[j]; j++) {
//         var item = document.createElement('div');
//         var itemHeight = data.subItems[j].count / highestNumber;
//         item.className = 'barItem animateNoHeight';
//         item.setAttribute('data-itemtype', data.subItems[j].name);
//         item.setAttribute('data-count', data.subItems[j].count);
//         item.style.height = itemHeight * 150 + 'px';
//         item.style.backgroundColor = data.subItems[j].color;
//         subItemContainer.appendChild(item);
//         items.push(item);

//         var subItemLabel = document.createElement('div');
//         subItemLabel.className = 'subItemLabel';
//         subItemLabel.innerHTML = data.subItems[j].name + ': ' + prefix + data.subItems[j].count.toFixed(2);
//         item.appendChild(subItemLabel);

//         itemTotalNumber += data.subItems[j].count;
//     };
//     itemTotalLabel.innerHTML = prefix + itemTotalNumber.toFixed(2);


//     var itemLabel = document.createElement('div');
//     itemLabel.className = 'itemLabel';
//     itemLabel.innerHTML = data.name;
//     container.appendChild(itemLabel);

//     setTimeout(function () {
//         for (var k = 0; items[k]; k++) {
//             items[k].className = 'barItem';
//         };
//     }, 10);

//     //METHODS
//     var updateTotals = function () {
//         var total = 0;
//         for (j = 0; items[j]; j++) {
//             var count = items[j].getAttribute('data-count');
//             if (items[j].className !== 'barItem animateNoHeight') {
//                 total += parseFloat(count);
//             };
//         };
//         itemTotalLabel.innerHTML = prefix + total.toFixed(2);
//     };

//     return {
//         updateTotals: updateTotals,
//         itemTotalNumber: itemTotalNumber
//     };
// };

