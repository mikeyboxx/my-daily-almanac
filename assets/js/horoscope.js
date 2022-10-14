function renderHoroscope(obj){
    console.log(obj);
    let containerEl = $('<div>').addClass(" column is-half");
    let boxEl = $('<div>').addClass("horoscope-card box middle-box ");

        var hEl = $('<h3>').text(userObj.zodiacSign + userObj.zodiacIcon).addClass("horoscope-heading");
        boxEl.append(hEl);

        var pEl = $('<p>').text(obj.date_range).addClass("horoscope-dates");
        boxEl.append(pEl);
        pEl = $('<p>').text("Today's Horoscope:").addClass("todays-horoscope");
        boxEl.append(pEl);

        pEl = $('<p>').text(obj.description).addClass("horoscope");
        boxEl.append(pEl);

        pEl = $('<p>').text("Compatability: " + obj.compatibility).addClass("horoscope-content");
        boxEl.append(pEl);

        pEl = $('<p>').text("Color: " + obj.color).addClass("horoscope-content");
        boxEl.append(pEl);


        pEl = $('<p>').text("Lucky Number: " + obj.lucky_number).addClass("horoscope-content");
        boxEl.append(pEl);

        pEl = $('<p>').text("Lucky Time: " + obj.lucky_time).addClass("horoscope-content");
        boxEl.append(pEl);

        pEl = $('<p>').text("Mood: " + obj.mood).addClass("horoscope-content");
        boxEl.append(pEl);

        $(containerEl).append(boxEl);


    return containerEl;

}

