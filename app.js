'use strict';

// GLOBAL VARIABLES
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var theTable = document.getElementById('samsShopTable');
var dataForm = document.getElementById('data-form');
// var dataList = document.getElementById('chat-list');
// var clearNewShops = document.getElementById('clear-new-stops')
var samsShop = [];

// function randCust(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

function Shop(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalDailySales = 0; //PR
  this.randomCustomersPerHour = [];
  this.totalCookiesPerHour = []; //PR
  // this.calcCookiesThisHour = function() {};
  // this.custPerHour();
  // this.calcCookiesPerHour();
  samsShop.push(this);
}

function renderAllStores() {
  theTable.innerHTML = '';
  header();

  for(var i = 0; i < samsShop.length; i++) {
    samsShop[i].calcCookiesPerHour();
    samsShop[i].render();
  }
  // dataList.innerHTML = ''; //may have to make this data list to form?
  //
  // for (var i = 0; i < allComments.length; i++) {
  //   chatList.appendChild(allComments[i].render());
}

Shop.prototype.custPerHour = function(){       //Prototype is what attaches these functions to the contructor.  it makes it a part of the store constructor === so we can applay this to all the stores... so it is almost like a property. === Prototype the generic reference to the files that attaches is to the constructor function.

  // var ref = [];
  for (var i = 0; i < hours.length; i++) {
    var push = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    console.log(push);
    this.randomCustomersPerHour.push(push);
  }
};

Shop.prototype.calcCookiesPerHour = function(){
  // var pushTwo = [];
  this.totalDailySales = 0;
  this.custPerHour();
  for (var i = 0; i < hours.length; i++) {
    var pushTwo = Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer);
    console.log(pushTwo);
    this.totalCookiesPerHour.push(pushTwo);
    // this.totalDailySales += this.totalCookiesPerHour[i];  // SO IMPORTANT TO UNDERSTAND WHY THIS IS HERE
    this.totalDailySales += pushTwo;
  }
};

function header(){        //because of this header function we don't need to remake the th 's '
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

Shop.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  theTable.appendChild(trEl);
};

// function handleNewShopSubmit(event) {
//   event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

// Validation to prevent empty form fields
//   if (!event.target.says.value || !event.target.who.value) {
//     return alert('Fields cannot be empty!');
// }

new Shop ('Pike Place Market', 23, 65, 6.3);
new Shop ('SeaTac Airport', 3, 24, 1.2);
new Shop ('Seattle Center', 11, 38, 3.7);
new Shop ('Capitol Hill', 20, 38, 2.3);
new Shop ('Alki', 3, 24, 1.2);

//putting this here for now! COMMENTED OUT FOR NOW!
renderAllStores();

function handleNewShopSubmit(event) {
  //do I need an event tarter?
  event.preventDefault();
  // gotta have it for this purpose. prevents page reload on a 'submit' event

// Validation to prevent empty form fields
  if (!event.target.newShop.value || !event.target.minCusts.value || !event.target.maxCusts.value || !event.target.avgSales.value) {
    return alert('Fields cannot be empty!');
  }

  var newShop = event.target.newShop.value;
  var minCusts = parseInt(event.target.minCusts.value);
  var maxCusts = parseInt(event.target.maxCusts.value);
  var avgSales = parseInt(event.target.avgSales.value);

  new Shop(newShop, minCusts, maxCusts, avgSales);

  // console.log('Comment by ' + event.target.who.value + ' at ' + Date());

  event.target.newShop.value = null;
  event.target.minCusts.value = null;
  event.target.maxCusts.value = null;
  event.target.avgSales.value = null;

  // allComments.push(newStore);   // I have problems here I need to solve
  renderAllStores();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
dataForm.addEventListener('submit', handleNewShopSubmit);


//START






// 'use strict';
//
// // GLOBAL VARIABLES
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var theTable = document.getElementById('samsShopTable');
// var dataForm = document.getElementById('data-form');
// // var dataList = document.getElementById('chat-list');
// // var clearNewShops = document.getElementById('clear-new-stops')
//
// // function randCust(min, max) {
// //   return Math.floor(Math.random() * (max - min + 1) + min);
// // }
//
// function Shop(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
//   this.location = location;
//   this.minCustomersPerHour = minCustomersPerHour;
//   this.maxCustomersPerHour = maxCustomersPerHour;
//   this.avgCookiesPerCustomer = avgCookiesPerCustomer;
//   this.totalDailySales = 0; //PR
//   this.randomCustomersPerHour = [];
//   this.totalCookiesPerHour = []; //PR
//   // this.calcCookiesThisHour = function() {};
//   // this.custPerHour();
//   // this.calcCookiesPerHour();
//   samsShop.push(this);
// }
//
// Shop.prototype.custPerHour = function(){       //Prototype is what attaches these functions to the contructor.  it makes it a part of the store constructor === so we can applay this to all the stores... so it is almost like a property. === Prototype the generic reference to the files that attaches is to the constructor function.
//
//   // var ref = [];
//   for (var i = 0; i < hours.length; i++) {
//     var push = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
//     console.log(push);
//     this.randomCustomersPerHour.push(push);
//   }
// };
//
// Shop.prototype.calcCookiesPerHour = function(){
//   // var pushTwo = [];
//   this.custPerHour();
//   for (var i = 0; i < hours.length; i++) {
//     var pushTwo = Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer);
//     console.log(pushTwo);
//     this.totalCookiesPerHour.push(pushTwo);
//     // this.totalDailySales += this.totalCookiesPerHour[i];  // SO IMPORTANT TO UNDERSTAND WHY THIS IS HERE
//     this.totalDailySales += pushTwo;
//   }
// };
//
// var samsShop = [];
// new Shop ('Pike Place Market', 23, 65, 6.3);
// new Shop ('SeaTac Airport', 3, 24, 1.2);
// new Shop ('Seattle Center', 11, 38, 3.7);
// new Shop ('Capitol Hill', 20, 38, 2.3);
// new Shop ('Alki', 3, 24, 1.2);
//
// // function handleForm(e){
// //   e.preventDefault();
// //   console.log(e);
// //
// //   renderTable();
// // }
//
// function renderAllStores() {
//   theTable.innerHTML = '';
//   header();
//
//   for(var i = 0; i < samsShop.length; i++) {
//     samsShop[i].calcCookiesPerHour();
//     samsShop[i].render();
//   }
//   // dataList.innerHTML = ''; //may have to make this data list to form?
//   //
//   // for (var i = 0; i < allComments.length; i++) {
//   //   chatList.appendChild(allComments[i].render());
// }
//
// function header(){        //because of this header function we don't need to remake the th 's '
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = '';
//   trEl.appendChild(thEl);
//   for (var i = 0; i < hours.length; i++) {
//     thEl = document.createElement('th');
//     thEl.textContent = hours[i];
//     trEl.appendChild(thEl);
//   }
//   thEl = document.createElement('th');
//   thEl.textContent = 'Total';
//   trEl.appendChild(thEl);
//   theTable.appendChild(trEl);
// }
//
// Shop.prototype.render = function() {
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = this.location;
//   trEl.appendChild(tdEl);
//   for (var i = 0; i < hours.length; i++) {
//     tdEl = document.createElement('td');
//     tdEl.textContent = this.totalCookiesPerHour[i];
//     trEl.appendChild(tdEl);
//   }
//   tdEl = document.createElement('td');
//   tdEl.textContent = this.totalDailySales;
//   trEl.appendChild(tdEl);
//   theTable.appendChild(trEl);
// };
//
// //  THE WORKING CODE FOR FOOTER --- code currently will not run right with this...
// // function footer(){        //because of this header function we don't need to remake the th 's '
//   // var trEl = document.createElement('tr');
//   // var thEl = document.createElement('th');
//   // thEl.textContent = 'Hourly Totals for ALL Locations';
//   // trEl.appendChild(thEl);
//
//   // var totalOfTotals = 0;
//   // var totalDailySales = 0;
//   for (var i = 0; i < hours.length; i++) {
//     hourlyTotal = 0;
//     for (var j = 0; j < CookieStand.all.length; j++) {
//       hourlyTotal += CookieStand.all[j].cookiesEachHour[i];
//       // console.log these to check them...
//       totalOfTotals += CookieStand.all[j].cookiesEachHour[i];
//     }
//     thEl = document.createElement('th');
//     thEl.textContent = hours[i];
//     trEl.appendChild(thEl);
//   }
//   thEl = document.createElement('th');
//   thEl.textContent = 'Total';
//   trEl.appendChild(thEl);
//   theTable.appendChild(trEl);
// }
// // footer();    or do we through this in render table?
// // theForm.addEventListener('submit', handleForm); //will need to work This
//
// // function handleNewShopSubmit(event) {
// //   event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event
//
// // Validation to prevent empty form fields
// //   if (!event.target.says.value || !event.target.who.value) {
// //     return alert('Fields cannot be empty!');
// // }
//
// //putting this here for now! COMMENTED OUT FOR NOW!
// renderAllStores();
//
// function handleNewShopSubmit(event) {
//   //do I need an event tarter?
//   event.preventDefault();
//   // gotta have it for this purpose. prevents page reload on a 'submit' event
//
// // Validation to prevent empty form fields
//   if (!event.target.newShop.value || !event.target.minCusts.value || !event.target.maxCusts.value || !event.target.avgSales.value) {
//     return alert('Fields cannot be empty!');
//   }
//
//   var newShop = event.target.newShop.value;
//   var minCusts = parseInt(event.target.minCusts.value);
//   var maxCusts = parseInt(event.target.maxCusts.value);
//   var avgSales = parseFloat(event.target.avgSales.value);   // may have to turn this into a parseFLOAT!  so that you can get your decimal number in... console.log to test this out.
//
//   new Shop(newShop, minCusts, maxCusts, avgSales);
//
//   // console.log('Comment by ' + event.target.who.value + ' at ' + Date());
//
//   // event.target.newShop.value = null;
//   // event.target.minCusts.value = null;
//   // event.target.maxCusts.value = null;
//   // event.target.avgSales.value = null;
//
//   // allComments.push(newStore);   // I have problems here I need to solve
//   renderAllStores();
// }
//
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Event listener for comment submission form
// dataForm.addEventListener('submit', handleNewShopSubmit);
//
//
//
// // // copy of the store consdtruction ==== HERE ===
// // //     STOP!!! NOTE NOTE NOTE NOTE NOTE
// // // GLOBAL VARIABLES
// // var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// // var theTable = document.getElementById('samsShopTable');
// // var dataForm = document.getElementById('data-form');
// // // var dataList = document.getElementById('chat-list');
// // // var clearNewShops = document.getElementById('clear-new-stops')
// // var samsShop = [];
// //
// // // function randCust(min, max) {
// // //   return Math.floor(Math.random() * (max - min + 1) + min);
// // // }
// //
// // function Shop(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
// //   this.location = location;
// //   this.minCustomersPerHour = minCustomersPerHour;
// //   this.maxCustomersPerHour = maxCustomersPerHour;
// //   this.avgCookiesPerCustomer = avgCookiesPerCustomer;
// //   this.totalDailySales = 0; //PR
// //   this.randomCustomersPerHour = [];
// //   this.totalCookiesPerHour = []; //PR
// //   // this.calcCookiesThisHour = function() {};
// //   // this.custPerHour();
// //   // this.calcCookiesPerHour();
// //   samsShop.push(this);
// // }
// //
// // function renderAllStores() {
// //   theTable.innerHTML = '';
// //   header();
// //
// //   for(var i = 0; i < samsShop.length; i++) {
// //     samsShop[i].calcCookiesPerHour();
// //     samsShop[i].render();
// //   }
// //   // dataList.innerHTML = ''; //may have to make this data list to form?
// //   //
// //   // for (var i = 0; i < allComments.length; i++) {
// //   //   chatList.appendChild(allComments[i].render());
// // }
// //
// // Shop.prototype.custPerHour = function(){       //Prototype is what attaches these functions to the contructor.  it makes it a part of the store constructor === so we can applay this to all the stores... so it is almost like a property. === Prototype the generic reference to the files that attaches is to the constructor function.
// //
// //   // var ref = [];
// //   for (var i = 0; i < hours.length; i++) {
// //     var push = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
// //     console.log(push);
// //     this.randomCustomersPerHour.push(push);
// //   }
// // };
// //
// // Shop.prototype.calcCookiesPerHour = function(){
// //   // var pushTwo = [];
// //   this.custPerHour();
// //   for (var i = 0; i < hours.length; i++) {
// //     var pushTwo = Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer);
// //     console.log(pushTwo);
// //     this.totalCookiesPerHour.push(pushTwo);
// //     // this.totalDailySales += this.totalCookiesPerHour[i];  // SO IMPORTANT TO UNDERSTAND WHY THIS IS HERE
// //     this.totalDailySales += pushTwo;
// //   }
// // };
// //
// // function header(){        //because of this header function we don't need to remake the th 's '
// //   var trEl = document.createElement('tr');
// //   var thEl = document.createElement('th');
// //   thEl.textContent = '';
// //   trEl.appendChild(thEl);
// //   for (var i = 0; i < hours.length; i++) {
// //     thEl = document.createElement('th');
// //     thEl.textContent = hours[i];
// //     trEl.appendChild(thEl);
// //   }
// //   thEl = document.createElement('th');
// //   thEl.textContent = 'Total';
// //   trEl.appendChild(thEl);
// //   theTable.appendChild(trEl);
// // }
// //
// // Shop.prototype.render = function() {
// //   var trEl = document.createElement('tr');
// //   var tdEl = document.createElement('td');
// //   tdEl.textContent = this.location;
// //   trEl.appendChild(tdEl);
// //   for (var i = 0; i < hours.length; i++) {
// //     tdEl = document.createElement('td');
// //     tdEl.textContent = this.totalCookiesPerHour[i];
// //     trEl.appendChild(tdEl);
// //   }
// //   tdEl = document.createElement('td');
// //   tdEl.textContent = this.totalDailySales;
// //   trEl.appendChild(tdEl);
// //   theTable.appendChild(trEl);
// // };
// //
// // // function handleNewShopSubmit(event) {
// // //   event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event
// //
// // // Validation to prevent empty form fields
// // //   if (!event.target.says.value || !event.target.who.value) {
// // //     return alert('Fields cannot be empty!');
// // // }
// //
// // new Shop ('Pike Place Market', 23, 65, 6.3);
// // new Shop ('SeaTac Airport', 3, 24, 1.2);
// // new Shop ('Seattle Center', 11, 38, 3.7);
// // new Shop ('Capitol Hill', 20, 38, 2.3);
// // new Shop ('Alki', 3, 24, 1.2);
// //
// // //putting this here for now! COMMENTED OUT FOR NOW!
// // renderAllStores();
// //
// // function handleNewShopSubmit(event) {
// //   //do I need an event tarter?
// //   event.preventDefault();
// //   // gotta have it for this purpose. prevents page reload on a 'submit' event
// //
// // // Validation to prevent empty form fields
// //   if (!event.target.newShop.value || !event.target.minCusts.value || !event.target.maxCusts.value || !event.target.avgSales.value) {
// //     return alert('Fields cannot be empty!');
// //   }
// //
// //   var newShop = event.target.newShop.value;
// //   var minCusts = parseInt(event.target.minCusts.value);
// //   var maxCusts = parseInt(event.target.maxCusts.value);
// //   var avgSales = parseInt(event.target.avgSales.value);
// //
// //   new Shop(newShop, minCusts, maxCusts, avgSales);
// //
// //   // console.log('Comment by ' + event.target.who.value + ' at ' + Date());
// //
// //   event.target.newShop.value = null;
// //   event.target.minCusts.value = null;
// //   event.target.maxCusts.value = null;
// //   event.target.avgSales.value = null;
// //
// //   // allComments.push(newStore);   // I have problems here I need to solve
// //   renderAllStores();
// // }
// //
// // // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // // Event listener for comment submission form
// // dataForm.addEventListener('submit', handleNewShopSubmit);
// //
// // // Event listener for the 'Clear all comments' button
// // // clearNewShops.addEventListener('click', function() {
// // //   dataList.innerHTML = '';
// // //   console.log('You just cleared the chat list!');
// // //   allComments = [];
// // // });
// //
// // // event.preventDefault();
// //
// // //  this is a property on the constructor === cookiestand.all = []
// // //
// //
// // // Make header for loop
// // // render all stores
// //
// // // shopArray[0].calcCustomersThisHour();
// //
// // // pikePlaceMkt.calcCustomersPerHour();
// // // pikePlaceMkt.calcCookiesPerHour();
// // //
// // // pikePlaceMkt.render();
// //
// // // pikePlaceMkt.calcCustomersPerHour();
// // // pikePlaceMkt.calcCookiesPerHour();
// // //
// // // pikePlaceMkt.render();
// //
// // // this.calcCustomersPerHour = function(){
// // //   for (var i = 0; i < hours.length; i++) {
// // //     this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
// // //     console.log(this.randomCustomersPerHour[i]);
// // // this.randomCookiesPerHour = [];
// // // this.calcCookiesPerHour = function(){
// // //   for (var i = 0; i < hours.length; i++) {
// // //     this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
// // //     this.totalDailySales += this.totalCookiesPerHour[i];  // SO IMPORTANT TO UNDERSTAND WHY THIS IS HERE
// // //     console.log(this.totalDailySales);
// //
// // // SHOP 1
// // // var pikePlaceMkt = {
// // //   location: 'Pike Place Market',
// // //   minCustomersPerHour: 23,
// // //   maxCustomersPerHour: 65,
// // //   avgCookiesPerCustomer: 6.3,
// // //   totalDailySales: 0,
// // //   randomCustomersPerHour: [],
// // //   totalCookiesPerHour: [],
// // //   calcCustomersPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
// // //       console.log(this.randomCustomersPerHour[i]);
// // //     }
// // //   },
// //   // randomCookiesPerHour: [],
// //   // // customersEachHour: [],
// //   // calcCookiesPerHour: function(){
// //   //   for (var i = 0; i < hours.length; i++) {
// //   //     this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
// //   //     this.totalDailySales += this.totalCookiesPerHour[i];  // SO IMPORTANT TO UNDERSTAND WHY THIS IS HERE
// //   //     console.log(this.totalDailySales);
// //   //   }
// //   // },
// //   // calcCookiesThisHour: function() {},
// //   // cookiesEachHour: [],
// // //   render: function() {
// // //     var ulEl = document.getElementById('locationName1');
// // //     ulEl.textContent = this.location;
// // //     for (var i = 0; i < hours.length; i++) {
// // //       console.log('Hello');
// // //       var liEl = document.createElement('li');
// // //       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
// // //       ulEl.appendChild(liEl);
// // //     }
// // //     liEl = document.createElement('li');
// // //     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
// // //     ulEl.appendChild(liEl);
// // //   }
// // // };
// // // pikePlaceMkt.calcCustomersPerHour();
// // // pikePlaceMkt.calcCookiesPerHour();
// // //
// // // pikePlaceMkt.render();
// // //
// // // // SHOP 2
// // // var seaTacAirport = {
// // //   location: 'SeaTac Airport',
// // //   minCustomersPerHour: 3,
// // //   maxCustomersPerHour: 24,
// // //   avgCookiesPerCustomer: 1.2,
// // //   totalDailySales: 0,
// // //   randomCustomersPerHour: [],
// // //   totalCookiesPerHour: [],
// // //   calcCustomersPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
// // //       console.log(this.randomCustomersPerHour[i]);
// // //     }
// // //   },
// // //   randomCookiesPerHour: [],
// // //   // customersEachHour: [],
// // //   calcCookiesPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
// // //       this.totalDailySales += this.totalCookiesPerHour[i];
// // //       console.log(this.totalDailySales);
// // //     }
// // //   },
// // //   // calcCookiesThisHour: function() {},
// // //   cookiesEachHour: [],
// // //   render: function() {
// // //     var ulEl = document.getElementById('locationName2');
// // //     ulEl.textContent = this.location;
// // //     for (var i = 0; i < hours.length; i++) {
// // //       console.log('Hello');
// // //       var liEl = document.createElement('li');
// // //       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
// // //       ulEl.appendChild(liEl);
// // //     }
// // //     liEl = document.createElement('li');
// // //     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
// // //     ulEl.appendChild(liEl);
// // //   }
// // // };
// // // seaTacAirport.calcCustomersPerHour();
// // // seaTacAirport.calcCookiesPerHour();
// // //
// // // seaTacAirport.render();
// // //
// // // // SHOP 3
// // // var seattleCenter = {
// // //   location: 'Seattle Center',
// // //   minCustomersPerHour: 11,
// // //   maxCustomersPerHour: 38,
// // //   avgCookiesPerCustomer: 3.7,
// // //   totalDailySales: 0,
// // //   randomCustomersPerHour: [],
// // //   totalCookiesPerHour: [],
// // //   calcCustomersPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
// // //       console.log(this.randomCustomersPerHour[i]);
// // //     }
// // //   },
// // //   randomCookiesPerHour: [],
// // //   // customersEachHour: [],
// // //   calcCookiesPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
// // //       this.totalDailySales += this.totalCookiesPerHour[i];
// // //       console.log(this.totalDailySales);
// // //     }
// // //   },
// // //   // calcCookiesThisHour: function() {},
// // //   cookiesEachHour: [],
// // //   render: function() {
// // //     var ulEl = document.getElementById('locationName3');
// // //     ulEl.textContent = this.location;
// // //     for (var i = 0; i < hours.length; i++) {
// // //       console.log('Hello');
// // //       var liEl = document.createElement('li');
// // //       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
// // //       ulEl.appendChild(liEl);
// // //     }
// // //     liEl = document.createElement('li');
// // //     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
// // //     ulEl.appendChild(liEl);
// // //   }
// // // };
// // // seattleCenter.calcCustomersPerHour();
// // // seattleCenter.calcCookiesPerHour();
// // //
// // // seattleCenter.render();
// // //
// // // // // SHOP 4
// // // var capitolHill = {
// // //   location: 'Capitol Hill',
// // //   minCustomersPerHour: 11,
// // //   maxCustomersPerHour: 38,
// // //   avgCookiesPerCustomer: 3.7,
// // //   totalDailySales: 0,
// // //   randomCustomersPerHour: [],
// // //   totalCookiesPerHour: [],
// // //   calcCustomersPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
// // //       console.log(this.randomCustomersPerHour[i]);
// // //     }
// // //   },
// // //   randomCookiesPerHour: [],
// // //   // customersEachHour: [],
// // //   calcCookiesPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
// // //       this.totalDailySales += this.totalCookiesPerHour[i];
// // //       console.log(this.totalDailySales);
// // //     }
// // //   },
// // //   // calcCookiesThisHour: function() {},
// // //   cookiesEachHour: [],
// // //   render: function() {
// // //     var ulEl = document.getElementById('locationName4');
// // //     ulEl.textContent = this.location;
// // //     for (var i = 0; i < hours.length; i++) {
// // //       console.log('Hello');
// // //       var liEl = document.createElement('li');
// // //       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
// // //       ulEl.appendChild(liEl);
// // //     }
// // //     liEl = document.createElement('li');
// // //     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
// // //     ulEl.appendChild(liEl);
// // //   }
// // // };
// // // capitolHill.calcCustomersPerHour();
// // // capitolHill.calcCookiesPerHour();
// // //
// // // capitolHill.render();
// // // //
// // // // // SHOP 5
// // // var alki = {
// // //   location: 'Alki',
// // //   minCustomersPerHour: 2,
// // //   maxCustomersPerHour: 16,
// // //   avgCookiesPerCustomer: 4.6,
// // //   totalDailySales: 0,
// // //   randomCustomersPerHour: [],
// // //   totalCookiesPerHour: [],
// // //   calcCustomersPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
// // //       console.log(this.randomCustomersPerHour[i]);
// // //     }
// // //   },
// // //   randomCookiesPerHour: [],
// // //   // customersEachHour: [],
// // //   calcCookiesPerHour: function(){
// // //     for (var i = 0; i < hours.length; i++) {
// // //       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
// // //       this.totalDailySales += this.totalCookiesPerHour[i];
// // //       console.log(this.totalDailySales);
// // //     }
// // //   },
// // //   // calcCookiesThisHour: function() {},
// // //   cookiesEachHour: [],
// // //   render: function() {
// // //     var ulEl = document.getElementById('locationName5');  //HTLM REFERENCe
// // //     ulEl.textContent = this.location; //write text content corresponds to id
// // //     for (var i = 0; i < hours.length; i++) {
// // //       console.log('Hello');
// // //       var liEl = document.createElement('li');  //Create li variable
// // //       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
// // //       ulEl.appendChild(liEl);  // append child means === adds to DOM
// // //     }
// // //     liEl = document.createElement('li');
// // //     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
// // //     ulEl.appendChild(liEl);
// // //   }
// // // };
// // // alki.calcCustomersPerHour();
// // // alki.calcCookiesPerHour();
// // //
// // // alki.render();
// // //
// // // // IN CLASS NOTES
// // // //
// // // // 'use strict'
// // // //
// // // // var randomCust = function(max, min) {
// // // //   Math.floor(Math.random() * (max - min + 1) + min);
// // // // };
// // // // // Ask about this...
// // // //
// // // // var hours = ['6am', ...];
// // // //
// // // // var pikePlace = {
// // // //   minCustomers: 23,
// // // //   maxCustomers: 65,
// // // //   avgCookiesPerSale: 6.3,
// // // //   totalDailySales: 0,
// // // //   // ultimatitely, I want an array of hourly cookie sales
// // // //   // [88, 94, 105, 56...]
// // // //
// // // //   // need a place store the customers data
// // // //   customersEachHours: [],
// // // //   calcCustomersEachHour: function() {
// // // //     for (var i = 0; i < hours.length; i++)
// // // //     // push a new random number into the customer array
// // // //     customersEachHour.push(Math.floor(Math.random()))
// // // //   },
// // // //
// // // //   // To calculate that, I first need to know customers each hour
// // // //   // [34, 62. 44, 33]
// // // //   cookesSoldEachHour: [],
// // // //   calcCookiesSoleEachHour: function() {
// // // //
// // // //   },
// // // //
// // // //   // I will need a method to render this to the DOM
// // // //   render: function() {
// // // //   },
// // // // };
// // //
// // // // Let's make a literal object!
// // // // var student = {
// // // //   firstName: 'Aaron',
// // // //   lastInitial: 'M',
// // // //   hasBeart: true,
// // // //   class: '201d23'
// // // //   faveNumber: 7,
// // // //   isLeeHaxx0r: true,
// // // //   introduction: function (){
// // // //     console.log('Hi, my name is ' + this.firstName + ' and my favorite number is ' + this.favNumber);
// // // //   }
// // // // }
// // //
// // // var mahClass = [];
// // //
// // // function Student(firstName, lastInitial, hasBeard, favNumber){
// // //   this.firstName = firstName;
// // //   var dog = 'woof';
// // //   this.lastInitial = lastInitial;
// // //   this.hasBeard = hasBeard;
// // //   this.class = '201d23';
// // //   this.faveNumber = favNumber;
// // //   this.isLeeHaxx0r = true;
// // //   mahClass.push(this);
// // // }
// // // Student.prototype.introduction = function (){
// // //   console.log('Hi, my name is ' + this.firstName + ' and my favorite number is ' + this.favNumber);
// // // };
// // // Student.prototype.beardedness = function() {
// // //   console.log('Does ' + this.firstName + ' have a luxurious and thick beard? ' + this.hasBeard);
// // // };
// // //
// // // Student.weasels = 'WEASELS!!! RUN!!!!!'; //Not inherited by instances
// // // Student.prototype.seagull = 'Seagulls, stop it now!'; //This one would be inherited by every instance
// // //
// // // var aaron = new Student('Aaron', 'M', true, 7);
// // // var chai = new Student('Chai', 'N', true, 7);
// // // var katherineH = new Student('Katherine', 'H', false, 9);
// // //
// // // mahClass.push(this);
// // //
// // // console.table(mahClass) // prints out array of stuff to take a look at the table form of your information
// // //
// // // //tables in javascript
// // //
// // // var allCats = [];
// // //
// // // function Cat(name, color, tail) {
// // //   this.name = name;
// // //   this.color = color;
// // //   this.tail = tail;
// // //   allCats.push(this);
// // // }
// // //
// // // Cat.prototype.render = function(){
// // //   var theTable = document.getElementById('cats');
// // //   console.log(theTable);
// // //   var trEl = document.createElement('tr');
// // //   var tdEl = document.createElement('td');
// // //   tdEl.textContent = this.name;
// // //   trEl.appendChild(tdEl);
// // //   theTable.appendChild('tdEl');
// // // };
// // //
// // // new Cat('Buddy', 'orange and white', 'VERY long');
// // // new Cat('Allistair', 'orang', 'small');
// // // new Cat('Trillian', 'black/orange', 'very small');
// // // new Cat('Meo Mix', 'black', 'medium');
// // // new Cat('Toeny', 'gray', 'medium-large');
// // //
// // // function machenSieDasHeader (){
// // //   var trEl = document.createElement('tr');
// // //   var thEl = document.createElement('th');
// // //   thEl.textContent = name;
// // //   trEl.appendChild(thEl);
// // //   theTable.appendChild('trEl');
// // // }
// // //
// // // function renderAllCats() {
// // //   for(var i = 0; i < allCats.length; i++){
// // //     allCats[i].render;
// // //   }
// // // }
// // //
// // // renderAllCats();
