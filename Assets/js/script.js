// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var currentTime = dayjs().format("MMMM D YYYY, HH:mm");
  //Current date time print on header paragraph
  setInterval(function () {
    for (let i = 0; i < 1; i++) {
      $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY, HH:mm:ss"));
    }
  }, 1000);

  var currenHour = dayjs().hour();
  console.log(dayjs().hour());

  $("textarea").each(function () {
    var textAreaTime = parseInt($(this).attr("id"));
    console.log(textAreaTime);
    if (currenHour < textAreaTime) {
      $(this).addClass("past");
    } else if (currenHour > textAreaTime) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });

  //Hour 9
  var newDataHour9 = "";

  $("#hour-9")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-9").children("textarea").val();
      if (txtHour9Val !== null) {
        newDataHour9 = { text: txtHour9Val };
        localStorage.setItem("9", JSON.stringify(newDataHour9));
        console.log(newDataHour9.text);
      }
    });

  //Hour 10
  $("#hour-10")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-10").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = { text: txtHour9Val, time: currentTime };
        localStorage.setItem("10", JSON.stringify(newDataHour9));
      }
    });
  //Hour 11
  $("#hour-11")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-11").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = { text: txtHour9Val, time: currentTime };
        localStorage.setItem("11", JSON.stringify(newDataHour9));
      }
    });
  //Hour 12
  $("#hour-12")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-12").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = { text: txtHour9Val, time: currentTime };
        localStorage.setItem("12", JSON.stringify(newDataHour9));
      }
    });
  //Hour 1
  $("#hour-1")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-1").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = { text: txtHour9Val, time: currentTime };
        localStorage.setItem("13", JSON.stringify(newDataHour9));
      }
    });
  //Hour 2
  $("#hour-2")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-2").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = { text: txtHour9Val, time: currentTime };
        localStorage.setItem("14", JSON.stringify(newDataHour9));
      }
    });
  //Hour 3
  $("#hour-3")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-3").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = { text: txtHour9Val, time: currentTime };
        localStorage.setItem("15", JSON.stringify(newDataHour9));
      }
    });
  // Hour 4
  $("#hour-4")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-4").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = { text: txtHour9Val, time: currentTime };
        localStorage.setItem("16", JSON.stringify(newDataHour9));
      }
    });
  // Hour 5
  $("#hour-5")
    .children("button")
    .click(function () {
      var txtHour9Val = $("#hour-5").children("textarea").val();
      if (txtHour9Val !== null) {
        var newDataHour9 = { text: txtHour9Val, time: currentTime };
        localStorage.setItem("17", JSON.stringify(newDataHour9));
      }
    });

  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = JSON.parse(localStorage.getItem(key));
    $("#" + key).val(value.text);
  }

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
