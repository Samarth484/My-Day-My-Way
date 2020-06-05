
module.exports=getDate;

function getDate() {
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
