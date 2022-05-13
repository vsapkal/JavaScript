
var todayDate = new Date();
console.log("todayDate ", todayDate);
var month = todayDate.getMonth(); //04 - current month
console.log("Month ", month);
var year = todayDate.getUTCFullYear() - 18; //2021 - current year
console.log("Year ", year);
var tdate = todayDate.getDate(); // 27 - current date 
console.log("Tdate ", tdate);
if (month < 10) {
    month = "0" + month //'0' + 4 = 04
}
else if (tdate < 10) {
    tdate = "0" + tdate;
}
var maxDate = month + "-" + tdate + "-" + year;

//   document.getElementById("demo").setAttribute("max", maxDate);
console.log(maxDate);
