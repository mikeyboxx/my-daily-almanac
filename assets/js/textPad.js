
// to keep track of last menu item selected
var lastIdx;

function renderTextPad(userObj){
    let currentDay = moment();
    let currentDayFormatted =currentDay.format("MMM Do, YYYY");
    $("#currentDay").text(currentDayFormatted);

    let currentDateIdx = userObj.archivedNotes.findIndex((el)=> el.date === currentDayFormatted);
    //very first time add current date to array 
    if (currentDateIdx === -1){
        userObj.archivedNotes.push({
            date: currentDayFormatted,
            text: ''
        });
        lastIdx = userObj.archivedNotes.length -1;
    } else {
        $(notes).val(userObj.archivedNotes[currentDateIdx].text);
        lastIdx = currentDateIdx;
    }

    // build the menu items and event listeners
    for (let i=0; i < userObj.archivedNotes.length; i++){
        // if last item which has current date then add a <hr> line
        if (i === userObj.archivedNotes.length - 1){
            let hrEl = $('<hr>').addClass('dropdown-divider');
            $(dropdownContent).append(hrEl);
        }

        // add the index as an attribute
        let aEl = $('<a>').addClass('dropdown-item').text(userObj.archivedNotes[i].date).attr('item', i);

        // event handler for switching menu items of archived notes
        $(aEl).on('click', (function(obj, event){
            event.stopPropagation();
            saveMsg.textContent = '';

            let currentDay = moment();
            let currentDayFormatted =currentDay.format("MMM Do, YYYY");
            
            let currentDateIdx = obj.archivedNotes.findIndex((el)=>el.date === currentDayFormatted);
            let currentIdx = Number($(event.target).attr('item')); 
            
            // if last item was the current date then save the text in the array
            if (lastIdx === currentDateIdx && currentIdx !== lastIdx  ){
                let userInput = $(notes).val().trim();
                obj.archivedNotes[currentDateIdx].text = userInput;
            }
            lastIdx = Number($(event.target).attr('item')); 

            // if it is not current date then make textarea read only
            if (currentIdx !== currentDateIdx){
                $(notes).attr('readonly', 'readonly');
            } else {
                $(notes).removeAttr('readonly');
            }
            $('#currentDay').text(obj.archivedNotes[currentIdx].date);
            $(notes).val(obj.archivedNotes[currentIdx].text);
            archivedList.classList.remove("is-active"); 
        }).bind(this, userObj));   // bind the userObj 

        $(dropdownContent).append(aEl);
    }

    // handler for save button of text pad area
    $(saveNotes).on('click', (function(obj, event){
        event.stopPropagation();
        let currentDay = moment();
        let currentDayFormatted =currentDay.format("MMM Do, YYYY");

        let notes = $("#notes");
        let userInput = notes.val().trim();

        let idx = obj.archivedNotes.findIndex((el)=>el.date === currentDayFormatted); 
        
        // if current date note, then save
        if (idx !== -1){
            obj.archivedNotes[idx].text = userInput;
            localStorage.setItem('userObj', JSON.stringify(obj));
            saveMsg.textContent = 'Your note has been saved!';
        }
    }).bind(this, userObj));

    // event handler for hiding/showing menu of dropdown itesm
    $(archivedList).on("click",function(event){
        event.stopPropagation();
        if(archivedList.classList.contains("is-active")){
            archivedList.classList.remove("is-active"); 
        } else {
            archivedList.classList.add("is-active");
        }
    });
}
