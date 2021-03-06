$("body").on("change", "#datePicker", function(){
  //update Table
  console.log("Updating Table...");
  var selectedDate = $(this).val();
  buildTable(selectedDate);
});


//add tablesorter to dayTable
$("#dayTable").tablesorter({
  headers: { 0: { sorter: false}}
});

//Set Default Date to Today
$('#datePicker').val(new Date().toDateInputValue());

//Initialize Day Table with Today's Data
var startToday = new Date(Date.now()).toJSONLocal();
buildTable(startToday);

//Set default date for entry form
$("body").on("click","#add-entry",function(){
  //if there is a tr
  if ($("#dayTable TBODY").children().is("tr")){
    //set default date input to previous date+duration
    var lastDatetime = $("#dayTable TBODY tr").last().children("td[class='datetime']").text();
    var lastDuration = $("#dayTable TBODY tr").last().children("td[class='duration']").text();
    var newDatetime = new Date(lastDatetime);

    newDatetime = newDatetime.addMinutes(durationToMinutes(lastDuration));

    $("#date").val(newDatetime.toDatetimeInputValue());
    //set duration to null
    $("#duration").val("");
  }

  //else (if no tr)
  else{
    //set default date to today's date at 12am
    $("#date").val($("#datePicker").val()+"T00:00:00");
  }


});
