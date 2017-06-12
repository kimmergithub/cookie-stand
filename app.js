// objects are going to go here
var shopHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var customers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

// function calcCustomersThisHour(h1){
//   var minCustomersPerHour = 23;
//   var maxCustomersPerHour = 65;
//   var hour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
//   var customers1 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers2 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers3 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers4 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers5 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers6 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers7 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers8 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers9 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers10 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers11 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers12 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers13 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers14 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   var customers15 = h1 * (Math.floor(Math.random() * (maxCustomersPerHour - minCustomersPerHour - 1)) + minCustomersPerHour);
//   return [[hour[0], customers1], [hour[1], customers2]
// [hour[2], customers3], [hour[3], customers4], [hour[4], customers5], [hour[5], customers6], [hour[6], customers7], [hour[7], customers8],
// [hour[8], customers9], [hour[9], customers10], [hour[10], customers11], [hour[11], customers12], [hour[12], customers13], [hour[13], customers14],
// [hour[14], customers15]]
// }
//
// calcCustomersThisHour(1);

// SHOP 1
var pikePlaceMkt = {
  shopName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  calcCustomersThisHour: function(){
       return (Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
    }
  },
  customersEachHour: [],
  perHour: function(){
    for (var i = 0; i < shopHour.length; i++) {
      this.customersEachHour.push(this.calcCookiesThisHour());
    }
  }
  // calcCookiesThisHour: function() {},
  cookiesEachHour: [],
  render: function() {}
}

pikePlaceMkt.calcCustomersThisHour();

// function multiplyArray(arrayParam){ //eslint-disable-line
//   var product = 1;
//   for (var i = 0; i < arrayParam.length; i++) {
//     product = multiply(product, arrayParam[i])[0];
//   // var math = multiply(testArray[0], multiply(testArray[1], testArray[2])[0])[0];
//   // var message = 'The numbers ' + testArray + ' have a product of ' + math + '.';
//   // return [math, message];
//   }
//   return [product, 'The numbers ' + arrayParam + ' have a product of ' + product + '.'];
// }

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);
// SHOP 2
// var seaTacAirport = {
//   shopName: 'SeaTack Airport',
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 24,
//   avgCookiesPerCustomer: 1.2,
//   calcCustomersThisHour: function() {},
//   customersEachHour: [],
//   calcCookiesThisHour: function() {},
//   cookiesEachHour: [],
//   render: function() {}
// };
//
// // SHOP 3
// var seattleCenter = {
//   shopName: 'Seattle Center',
//   minCustomersPerHour: 11,
//   maxCustomersPerHour: 24,
//   avgCookiesPerCustomer: 3.7,
//   calcCustomersThisHour: function() {},
//   customersEachHour: [],
//   calcCookiesThisHour: function() {},
//   cookiesEachHour: [],
//   render: function() {}
// };
//
// // SHOP 4
// var capitolHill = {
//   shopName: 'Capital Hill',
//   minCustomersPerHour: 20,
//   maxCustomersPerHour: 38,
//   avgCookiesPerCustomer: 2.3,
//   calcCustomersThisHour: function() {},
//   customersEachHour: [],
//   calcCookiesThisHour: function() {},
//   cookiesEachHour: [],
//   render: function() {}
// };
//
// // SHOP 5
// var alki = {
//   shopName: 'Alki',
//   minCustomersPerHour: 2,
//   maxCustomersPerHour: 16,
//   avgCookiesPerCustomer: 4.6,
//   calcCustomersThisHour: function() {},
//   customersEachHour: [],
//   calcCookiesThisHour: function() {},
//   cookiesEachHour: [],
//   render: function() {}
// };
//
// var numbers = [3,4,5];
// var multipliedNumbers = ['potato'];
//
// function timesNine() {
//   for (var i = 0; i < numbers.length; i++){
//     multipliedNumbers.push(numbers[i] * 9);
//   }
// }
//
// timesNine();
// console.log(multipliedNumbers);
//
// var min = 1;
// var max = 10;
// Math.floor(Math.random() * (max - min - 1)) + min;
//
// var myFavoriteUL = document.getElementById('stuff');
// var seagullCount = [2, 88, 3, 3, 2, 3, 42545];
// // // How to put this into the dom!
// //  HOW TO PUT THESE IN HTML USING JAVASCRIP!
//
// for(var i = 0; i < seagullCount.length; i++) {
// 	// 1. create element
// 	// 2. give element content
// 	// 3. append the element to the apporipraite place in the don
//   var liEL = document.createElement('li');
//   liEl.textContent = seagullCount[i];
//   myFavoriteUL.appendChild(liEL);
// }
