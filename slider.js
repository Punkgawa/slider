$( document ).ready(function() {
function update() {            
     $interest = 0.1 ;
     $perday = 800000 ;
     $amount1 = $("#amount").val();
     $dayscount = $("#days").val();
     $amount2 = parseInt($amount1) + $interest * parseInt($amount1) + (parseInt($dayscount) * ($perday/100));
     $apr = (($amount2-$amount1 / $amount1 ) / ((parseInt($dayscount)) ))  ;
     $("#amount2").val($amount2);
     $("#amount3").val(parseFloat($amount2-$amount1).toFixed(2));
     $("#amount4").val($apr);
}
 
debugger;
 
$("#slider1").slider({
    max:200000000,
    min:2000000,
    step:1000000,
    slide: function(event, ui) {  
 
        $("#amount").val(ui.value);
                update();
       
    }    
});
 
       
     
function addDaysToDate(days) {
  var mths = new Array("Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec");
 
  var d = new Date();
  d.setHours(d.getHours() + (24 * days));
 
  var currD = d.getDate();
  var currM = d.getMonth();
  var currY = d.getFullYear();
 
  return mths[currM] + " " + currD + ", " + currY;
}
 
 
 
$("#slider2").slider({
    max:36,
    min:6,
 
    slide: function(event, ui) {  
 
        $("#days").val(ui.value);
        $("#date").text(addDaysToDate(parseInt($("#days").val())));
                update();
    },
    create: function(event, ui) {
      $("#date").text(addDaysToDate(parseInt($("#days").val())));
    }    
});
 
$("#days").val($("#slider2").slider("value"));
 
$("#days").change(function(event) {
  var data = $("#days").val();
  if (data.length > 0)
  {
     if (parseInt(data) >= 0 && parseInt(data) <= 31)
    {
        $("#slider2").slider("option", "value", data);
     }
     else
     {
        if (parseInt(data) < 1)
       {
           $("#days").val("1");
           $("#slider2").slider("option", "value", "1");
       }
       if (parseInt(data) > 31)
        {
            $("#days").val("31");
            $("#slider2").slider("option", "value", "31");
        }
     }
  }
  else
  {
    $("#slider2").slider("option", "value", "1");
  }
  $("#date").text(addDaysToDate(parseInt($("#days").val())));
});
 
update();
});
