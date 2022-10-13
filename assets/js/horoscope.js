function renderHoroscope(obj){
    console.log(obj);
    let containerEl = $('<div>').addClass("horoscope-card");

        var hEl = $('<h3>').text(userObj.zodiacSign + userObj.zodiacIcon).addClass("horoscope-heading");
        containerEl.append(hEl);

        var pEl = $('<p>').text(obj.date_range).addClass("horoscope-dates");
        containerEl.append(pEl);
        pEl = $('<p>').text("Today's Horoscope:").addClass("todays-horoscope");
        containerEl.append(pEl);

        pEl = $('<p>').text(obj.description).addClass("horoscope");
        containerEl.append(pEl);

        pEl = $('<p>').text("Compatability: " + obj.compatibility).addClass("horoscope-content");
        containerEl.append(pEl);

        pEl = $('<p>').text("Color: " + obj.color).addClass("horoscope-content");
        containerEl.append(pEl);


        pEl = $('<p>').text("Lucky Number: " + obj.lucky_number).addClass("horoscope-content");
        containerEl.append(pEl);

        pEl = $('<p>').text("Lucky Time: " + obj.lucky_time).addClass("horoscope-content");
        containerEl.append(pEl);

        pEl = $('<p>').text("Mood: " + obj.mood).addClass("horoscope-content");
        containerEl.append(pEl);


    return containerEl;

}

