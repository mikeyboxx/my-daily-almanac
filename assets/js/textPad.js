// current day
var currentDay = moment();
// if the date is in the past then user can only read notes
// when user click on edit button a text area will appear
// if it is present day then user can edit text
// User will have a save button to save to local storage
$("#currentDay").text(currentDay.format("MMM Do YYYY"));

$("#textPad").val(JSON.parse(localStorage.getItem()));

$("#saveTextPad").on("click", function(){
    var userInput = $(".textarea").val().trim();
    console.log(userInput)
    localStorage.setItem(JSON.stringify(userInput))
});

renderTextPad(obj)
