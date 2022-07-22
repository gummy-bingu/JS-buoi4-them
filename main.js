
function dateBefore() {
  //Đầu vào
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;


  //Xử lý
  if(month == 5 || 7 || 8 || 10 || 12){
    if(day == 1){
      var oldday = "<p> 31" + "/" + (month-1) + "/" + year;
    }
    else if( day != 1 )
    {
   var oldday="<p>" + (day-1) +"/" + month + "/"+ year;
  } 
  }
   if( month == 1 && day == 1)
  {
    var oldday = "<p> 31" + "/12" + "/" + year;
  }
  if( month == 3)
  {
    var oldday = "<p> 28" + "/2" + year;
  }
  if( month == 4 || 6 || 9 ||11){
    if(day == 1){
      var oldday = "<p> 31" + "/" + (month-1) + "/" + year;
    }
    else if( day != 1 )
    {
    var oldday="<p>" + (day-1) +"/"+ month + "/"+ year;
    }
  }
  if( month == 2){
    if( day == 1)
    {
    var oldday ="<p> 31"+"/1" +"/" + year; 
    }
    if(day != 1){
      var oldday = "<p>" + (day-1) + "/" + month +"/" + year;
    }
  }
  
  
  //Đầu ra
  document.getElementById("date").innerHTML = oldday;

}
function dateAfter() {
  //Đầu vào
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;


  //Xử lý
  if(month == 3 || 5 || 7 || 8 || 10 || 12){
    if(day == 31){
      var newday = "<p> 1" + "/" + (month+1) + "/" + year;
    }
    else if( day != 31 )
    {
    newday="<p>" + (day+1) + "/"+ month + "/"+ year;
  } 
  }
   if( month == 1)
  {
    var newday = "<p> 1" + "/2" + "/" + year;
  }
  if( month == 4 || 6 || 9 ||11){
    if(day == 31){
      var newday = "<p> 1" + "/" + (month+1) + "/" + year;
    }
    else if( day != 31 )
    {
    var newday="<p>" + (day+1) +"/"+ month + "/"+ year;
    }
  }
  if( month == 2){
    if( day == 28)
    {
    var newday ="<p> 1"+"/ 3" + "/" + year; 
    }
    if(day != 28){
      var newday = "<p>" + (day+1) + "/" + month + "/" +year;
    }
  }
  
  //Đầu ra
  document.getElementById("date").innerHTML = newday;

}
function check(){

  //đầu vào 
  var month1 = document.getElementById("month1").value * 1;
  var year1 = document.getElementById("year1").value * 1;
//xử lý
  if(year1 % 4 == 0) {
  
    if( month1 == 1 || 3 || 5 ||7 ||8 ||10 || 12)
    {
      var dayInMonth="<p> Tháng " + month1 + " có 31 ngày " + "</p>";
    }
    else if( month1 ==2 )
    {
      var dayInMonth="<p> Tháng " + month1 + " có 29 ngày" +"</p>";
    }
  else if( month1 == 4||6||9||11)
  {
    var dayInMonth ="<p> Tháng "+ month1 + " có 30 ngày " + "</p>";
  }
  else{
    var dayInMonth = "<p> Tháng không tồn tại" + "</p>";
  }
  }
  if(year1 % 4 !=0) 
  {
    if( month1 == 1 || 3 || 5 ||7 ||8 ||10 ||12)
    {
      var dayInMonth="<p> Tháng " + month1 +" có 31 ngày " + "</p>";
    }
    else if( month1 ==2 ){
      var dayInMonth="<p> Tháng " + month1 + " có 28 ngày" +"</p>";
    }
  
  else if( month1 == 4||6||9||11){
    var dayInMonth ="<p> Tháng "+ month1 + " có 30 ngày " + "</p>";
  }
  else{
    var dayInMonth = "<p> Tháng không tồn tại" + "</p>";
  }
  }
// đầu ra

  document.getElementById("check").innerHTML = dayInMonth;

  
}

