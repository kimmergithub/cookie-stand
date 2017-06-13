'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// SHOP 1
var pikePlaceMkt = {
  location: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  totalDailySales: 0,
  randomCustomersPerHour: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  randomCookiesPerHour: [],
  // customersEachHour: [],
  calcCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  // calcCookiesThisHour: function() {},
  cookiesEachHour: [],
  render: function() {
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};
pikePlaceMkt.calcCustomersPerHour();
pikePlaceMkt.calcCookiesPerHour();

pikePlaceMkt.render();

// SHOP 2
var seaTacAirport = {
  location: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  totalDailySales: 0,
  randomCustomersPerHour: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  randomCookiesPerHour: [],
  // customersEachHour: [],
  calcCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  // calcCookiesThisHour: function() {},
  cookiesEachHour: [],
  render: function() {
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};
seaTacAirport.calcCustomersPerHour();
seaTacAirport.calcCookiesPerHour();

seaTacAirport.render();

// SHOP 3
var seattleCenter = {
  location: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  totalDailySales: 0,
  randomCustomersPerHour: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  randomCookiesPerHour: [],
  // customersEachHour: [],
  calcCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  // calcCookiesThisHour: function() {},
  cookiesEachHour: [],
  render: function() {
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};
seattleCenter.calcCustomersPerHour();
seattleCenter.calcCookiesPerHour();

seattleCenter.render();

// // SHOP 4
var capitolHill = {
  location: 'Capitol Hill',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  totalDailySales: 0,
  randomCustomersPerHour: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  randomCookiesPerHour: [],
  // customersEachHour: [],
  calcCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  // calcCookiesThisHour: function() {},
  cookiesEachHour: [],
  render: function() {
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};
capitolHill.calcCustomersPerHour();
capitolHill.calcCookiesPerHour();

capitolHill.render();
//
// // SHOP 5
var alki = {
  location: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  totalDailySales: 0,
  randomCustomersPerHour: [],
  totalCookiesPerHour: [],
  calcCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  randomCookiesPerHour: [],
  // customersEachHour: [],
  calcCookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  // calcCookiesThisHour: function() {},
  cookiesEachHour: [],
  render: function() {
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};
alki.calcCustomersPerHour();
alki.calcCookiesPerHour();

alki.render();
