
module.exports=function() {
  var today = new Date();
  var currentDay = today.getDay();
  var other = today.getFullYear()

  options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  day = today.toLocaleDateString("en-US", options);
  return day;
}

//The above code is simply a refractored version of the code that's mentioned below in the commented form: The refractoring is done by using the declaration of JS function using the expression method whereby which we've managed to reduce the redundancy of the getDate which appears many times therein the the commented code down there...
// module.exports=getDate;
//
// function getDate() {
//   var today = new Date();
//   var currentDay = today.getDay();
//   var other = today.getFullYear()
//
//   options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   };
//   day = today.toLocaleDateString("en-US", options);
//   return day;
// }
