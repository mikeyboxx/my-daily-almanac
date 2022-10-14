// current day
// var currentDay = moment();
// if the date is in the past then user can only read notes
// when user click on edit button a text area will appear
// if it is present day then user can edit text
// User will have a save button to save to local storage
// $("#currentDay").text(currentDay.format("MMM Do YYYY"));
// var notes = $("#notes");
// var archivedNote = []
// var userObj = [{
//     date:currentDay,
//     text:notes
// }]

// notes.val(JSON.parse(localStorage.getItem()));

// $("#saveNotes").on("click", function(){
//     var userInput = notes.val().trim();
//     console.log(userInput)
//     localStorage.setItem(date, JSON.stringify(userInput))
// });

function renderTextPad(userObj){
    console.log('save');
    var currentDay = moment();
    var currentDayFormatted =currentDay.format("MMM Do YYYY");
    console.log(currentDayFormatted);
    $("#currentDay").text(currentDayFormatted);

    $("#saveNotes").on("click", (function(obj, event){
        console.log('handler');
        event.preventDefault();
        var notes = $("#notes");
        var userInput = notes.val().trim();
        console.log(userInput);
        var note = {
            date: currentDayFormatted,
            text: userInput
        };
        // find the index of current day
        // if index = -1 (not found)
        //   obj.archivedNotes.push(note);
        // else
        //    obj.archivedNotes[currentDayidx] = note;

        localStorage.setItem('userObj', JSON.stringify(obj));
    }).bind(this, userObj));
}
