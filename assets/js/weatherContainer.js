function renderWeather(obj){
    console.log(obj);

    $(weatherCardsContainer).empty();
    
    let ctr = 0;
    let currDt = moment().format('MM/DD');
    for (let i=0; i<obj.length; i++){
        let objDt = moment(obj[i].startTime.slice(0,16)).format('MM/DD');
        let objDtTime = obj[i].startTime.slice(0,16).substr(11,5);
        if (objDt > currDt && objDtTime === '06:00' && ctr < 5) {
            ctr++;
            let colEl = $('<div>').addClass('column is-flex');
            let cardEl  = $('<div>').addClass('card');
            let cardHeaderEl  = $('<div>').addClass('card-header');
            let h2El  = $('<h2>').text(obj[i].name.slice(0,3).toUpperCase());
            let spanEl  = $('<span>').text(moment(obj[i].startTime.slice(0,16)).format('MM/DD'));

            $(h2El).append(spanEl);
            $(cardHeaderEl).append(h2El);
            $(cardEl).append(cardHeaderEl);

            let cardContentEl = $('<div>').addClass('card-content');
            let pEl = $('<p>').addClass('temp');
            let iEl = $('<i>').addClass('fa-solid fa-temperature-empty');
            $(pEl).append(iEl);
            
            spanEl = $('<span>').text(obj[i].temperature + '°');
            $(pEl).append(spanEl);
            $(cardContentEl).append(pEl);

            pEl = $('<p>').addClass('wind');
            iEl = $('<i>').addClass('fa fa-wind');
            $(pEl).append(iEl);

            spanEl = $('<span>').text(obj[i].windSpeed);
            $(pEl).append(spanEl);
            $(cardContentEl).append(pEl);

            pEl = $('<p>').addClass('forecast').text(obj[i].shortForecast);
            $(cardContentEl).append(pEl);

            $(cardEl).append(cardContentEl);
            $(colEl).append(cardEl);
            $(weatherCardsContainer).append(colEl);
        }
    }
}