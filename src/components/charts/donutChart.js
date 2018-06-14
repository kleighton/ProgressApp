// export default function DonutChart(size, containerId, data, text, title) {
//   var container = document.getElementById(containerId);
//   var donutContainer = document.createElement('div');
//   donutContainer.className = 'donutContainer';

//   container.appendChild(donutContainer);

//   var circleSize = size || 140;
//   var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
//   svg.setAttribute('width', circleSize + 'px');
//   svg.setAttribute('height', circleSize + 'px');
//   svg.setAttribute('viewBox', '0 0 42 42');

//   var donutHole = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
//   donutHole.setAttribute('cx', '21');
//   donutHole.setAttribute('cy', '21');
//   donutHole.setAttribute('r', '15.91549430918954');
//   donutHole.setAttribute('fill', '#fff');

//   var donutRing = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
//   donutRing.setAttribute('cx', '21');
//   donutRing.setAttribute('cy', '21');
//   donutRing.setAttribute('r', '15.91549430918954');
//   donutRing.setAttribute('fill', 'transparent');
//   donutRing.setAttribute('stroke', '#eaecef');
//   donutRing.setAttribute('stroke-width', '3');

//   var donutText = document.createElement('div');
//   donutText.className = 'donutText';
//   var donutTextHTML = '';
//   if (text) {
//       donutTextHTML = '<br> <span>' + text + '</span>';
//       donutText.className = 'donutText subDonutText'
//   };
//   if (title) {
//       var donutTitle = document.createElement('div');
//       donutTitle.className = 'donutTitle';
//       donutTitle.innerHTML = title;
//       donutContainer.appendChild(donutTitle);
//   };
//   svg.appendChild(donutHole);
//   svg.appendChild(donutRing);
//   donutContainer.appendChild(svg);
//   donutContainer.appendChild(donutText);

//   var totalCount = 0;

//   var circleSections = [];

//   for (var a = 0; data[a]; a++) {
//       totalCount += parseFloat(data[a].count);
//   }
//   donutText.innerHTML = totalCount.toFixed(2) + donutTextHTML;

//   for (var i = 0; data[i]; i++) {
//       var circle = new DonutSection(
//           svg,
//           data[i].color,
//           data[i].count,
//           findOffset()[i],
//           data[i].type,
//           totalCount
//       );
//       circleSections.push(circle);
//   };

//   function updateAllSegmentCounts() {
//       totalCount = 0;
//       for (var o = 0; circleSections[o]; o++) {
//           totalCount += circleSections[o].count;
//       };
//       donutText.innerHTML = totalCount.toFixed(2) + donutTextHTML;
//       return totalCount;
//   };

//   function findOffset() {
//       var firstOffset = 25;
//       var precedingLength = 0;
//       var offsetItems = [];
//       for (var n = 0; data[n]; n++) {
//           var offset = (100 - precedingLength) + firstOffset;
//           offsetItems.push(offset);
//           precedingLength += parseInt(data[n].count) / totalCount * 100;
//       };
//       return offsetItems;
//   };

//   function updateOffsets() {
//       var firstOffset = 25;
//       var precedingLength = 0;
//       var offsetItems = [];
//       for (var n = 0; circleSections[n]; n++) {
//           var offset = (100 - precedingLength) + firstOffset;
//           offsetItems.push(offset);
//           precedingLength += circleSections[n].dashArray;
//       };
//       return offsetItems;
//   };
//   function renderSegments() {
//       for (var m = 0; m < circleSections.length; m++) {
//           circleSections[m].updateDashArray(updateOffsets()[m],totalCount);
//       };
//   };

//   function updateSegmentCount(onOff, segment) {
//       if (onOff == 1) {
//           for (var p = 0; p < circleSections.length; p++) {
//               if (circleSections[p].cType == segment) {
//                   circleSections[p].turnOn(updateAllSegmentCounts,totalCount);
//               };
//           };
//       }
//       else {
//           for (var q = 0; q < circleSections.length; q++) {
//               if (circleSections[q].cType == segment) {
//                   circleSections[q].turnOff(updateAllSegmentCounts,totalCount);
//               };
//           };
//       };
//       renderSegments();
//   };

//   //MOUSEENTER EVENTS
//   for (var j = 0; j < circleSections.length; j++) {
//       var tooltip;
//       var thisCircle = circleSections[j];
//       circleSections[j].circle.addEventListener('mouseenter', function () {
//           this.parentElement.appendChild(this);

//           tooltip = document.createElement('div');
//           tooltip.className = 'circleSegmentLabel';
//           tooltip.style.position = 'fixed';
//           tooltip.style.pointerEvents = 'none';
//           this.parentElement.parentElement.appendChild(tooltip);
//           tooltip.innerHTML = this.getAttribute('data-itemType') + ': ' + this.getAttribute('data-count');
//           document.addEventListener('mousemove', function (e) {
//               if (tooltip != null) {
//                   var x = e.clientX;
//                   var y = e.clientY;
//                   tooltip.style.left = (x + 20) + 'px';
//                   tooltip.style.top = y + 'px';
//               };
//           });
//       });
//       circleSections[j].circle.addEventListener('mouseleave', function () {
//           tooltip.innerHTML = '';
//           tooltip.className = '';
//           tooltip = null;
//       });
//       // updateSegmentCount(0,thisCircle.cType);
//       // setTimeout(function(){
//       //   updateSegmentCount(1,thisCircle.cType);
//       // },100);
//   };
// };

// var DonutSection = function (container, color, count, cOffset, type,totalCount) {
//   var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
//   var offset = cOffset;
//   this.count = count
//   this.dashArray = this.count / totalCount * 100;
//   this.dashArrayInverse = 100 - this.dashArray;
//   var cType = type;
//   circle.setAttribute('cx', '21');
//   circle.setAttribute('cy', '21');
//   circle.setAttribute('r', '15.91549430918954');
//   circle.setAttribute('fill', 'transparent');
//   circle.setAttribute('stroke', color);
//   circle.setAttribute('stroke-width', '3');
//   circle.setAttribute('stroke-dasharray', this.dashArray + ' ' + this.dashArrayInverse);
//   circle.setAttribute('stroke-dashoffset', offset);
//   circle.setAttribute('data-itemType', type);
//   circle.setAttribute('data-count', count);
//   container.appendChild(circle);

//   var turnOn = function (updateAllSegmentCounts,totalCount) {
//       this.count = count;
//       this.dashArray = (this.count / totalCount * 100) || 0;
//       updateAllSegmentCounts();
//   };
//   var turnOff = function (updateAllSegmentCounts, totalCount) {
//       this.count = 0;
//       this.dashArray = (this.count / totalCount * 100) || 0;
//       updateAllSegmentCounts();
//   };
//   var updateDashArray = function (offset, totalCount) {
//       this.dashArray = (this.count / totalCount * 100) || 0;
//       this.dashArrayInverse = 100 - this.dashArray;
//       circle.setAttribute('stroke-dashoffset', offset);
//       circle.setAttribute('stroke-dasharray', this.dashArray + ' ' + this.dashArrayInverse);
//   };
//   return {
//       offset: offset,
//       updateDashArray: updateDashArray,
//       circle: circle,
//       turnOn: turnOn,
//       turnOff: turnOff,
//       cType: cType,
//       dashArray: this.dashArray,
//       count: this.count
//   };
// };
