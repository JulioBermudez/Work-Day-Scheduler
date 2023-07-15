// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var currentTime = "";
  setInterval(function(){
    for (let i = 0; i < 1; i++) {
      currentTime = dayjs().format("HH:mm:ss");   
      console.log(currentTime);
    }
  },1000)
  
  $("#hour-9")
    .children("button")
    .click(function () {
      var timeHour9 = dayjs().format("HH:mm:ss");
      var txtHour9Val = $("#hour-9").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = {
          text: txtHour9Val,
          time: timeHour9,
        };
        localStorage.setItem(timeHour9,
          JSON.stringify(newDataHour9)
        );      
      }
      


    });
  $("#hour-10")
    .children("button")
    .click(function () {
      var txtHour10Val = $("#hour-10").children("textarea").val();
      var timeHour10 = dayjs().format("MMMM D YYYY, HH:mm a");
      if (txtHour10Val !== null) {
        var newDataHour10 = {
          text: txtHour10Val,
          time: timeHour10,
        };
        localStorage.setItem(
          "hour-10 " + timeHour10,
          JSON.stringify(newDataHour10)
        );
      }
    });
  $("#hour-11")
    .children("button")
    .click(function () {
      var txtHour11Val = $("#hour-11").children("textarea").val();
      if (txtHour11Val !== null) {
        var newDataHour11 = {
          text: txtHour11Val,
        };
      }
      localStorage.setItem("hour-11", JSON.stringify(newDataHour11));
    });
  $("#hour-12")
    .children("button")
    .click(function () {
      var txtHour12Val = $("#hour-12").children("textarea").val();
      if (txtHour12Val !== null) {
        var newdataHour12 = {
          text: txtHour12Val,
        };
      }
      localStorage.setItem("hour-12", JSON.stringify(newdataHour12));
    });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
