function renderHoroscope(obj){
    console.log(obj);
    let containerEl = $('<div>');
    // for (var i=0; i< obj.length; i++) {
        var hEl = $('<h3>').text(userObj.zodiacSign)
        containerEl.append(hEl);

        var pEl = $('<p>').text("date-range: " + obj.date_range);
        containerEl.append(pEl);

        pEl = $('<p>').text("Compatability: " + obj.compatibility);
        containerEl.append(pEl);

        pEl = $('<p>').text("Color: " + obj.color);
        containerEl.append(pEl);

        pEl = $('<p>').text("Description: " + obj.description);
        containerEl.append(pEl);

        pEl = $('<p>').text("Lucky Number: " + obj.lucky_number);
        containerEl.append(pEl);

        pEl = $('<p>').text("Lucky Time: " + obj.lucky_time);
        containerEl.append(pEl);

        pEl = $('<p>').text("Mood: " + obj.mood);
        containerEl.append(pEl);

    // }
    return containerEl;

}

