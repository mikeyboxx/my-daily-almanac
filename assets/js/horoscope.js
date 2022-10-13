var middle = $("#middle")

function renderHoroscope(obj){
    console.log(obj);
    let containerEl = $('<div>');
    // for (var i=0; i< obj.length; i++) {
        var pEl = $('<p>').text(obj.color);
        containerEl.append(pEl);

        pEl = $('<p>').text(obj.compatability);
        containerEl.append(pEl);

        pEl = $('<p>').text(obj.date_range);
        containerEl.append(pEl);

        pEl = $('<p>').text(obj.description);
        containerEl.append(pEl);

        pEl = $('<p>').text(obj.lucky_number);
        containerEl.append(pEl);

        pEl = $('<p>').text(obj.lucky_time);
        containerEl.append(pEl);

        pEl = $('<p>').text(obj.mood);
        containerEl.append(pEl);

    // }
    return containerEl;

}

