function renderHoroscope(obj){
    let containerEl = $('<div>').addClass(" column is-half");
    let boxEl = $('<div>').addClass("horoscope-card box middle-box api-card");

    var hEl = $('<h3>').text(obj.zodiacIcon + obj.zodiacSign).addClass("horoscope-heading is-capitalized has-text-centered is-size-4 has-text-weight-bold");
    boxEl.append(hEl);

    pEl = $('<p>').text(obj.horoscope.description).addClass("horoscope has-text-centered");
    boxEl.append(pEl);

    pEl = $('<p>').text("Compatability: " + obj.horoscope.compatibility).addClass("horoscope-content has-text-centered");
    boxEl.append(pEl);

    pEl = $('<p>').text("Color: " + obj.horoscope.color).addClass("horoscope-content has-text-centered");
    boxEl.append(pEl);

    pEl = $('<p>').text("Mood: " + obj.horoscope.mood).addClass("horoscope-content has-text-centered");
    boxEl.append(pEl);

    $(containerEl).append(boxEl);

    return containerEl;
}

