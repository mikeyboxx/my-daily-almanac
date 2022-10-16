function renderWeather(obj){
    let boxEl = $('<div>').addClass("column is-half");
    let weatherEl = $('<div>').addClass('box middle-box weather-card');
    let cardContainerEl = $('<div>').addClass('columns weather-box-style');
    
    let ctr = 0;
    let currDt = moment().format('MM/DD');
    for (let i=0; i<obj.length; i++){
        let objDt = moment(obj[i].startTime.slice(0,16)).format('MM/DD');
        let objDtTime = obj[i].startTime.slice(0,16).substr(11,5);
        if (objDt > currDt && objDtTime === '06:00' && ctr < 5) {
            ctr++;
            let colEl = $('<div>').addClass('column is-flex');
            let cardEl  = $('<div>').addClass('card ');
            let cardHeaderEl  = $('<div>').addClass('card-header is-flex is-flex-direction-column');
            // let h2El  = $('<h2>').text(obj[i].name.slice(0,3).toUpperCase());
            let h2El  = $('<h2>').text(obj[i].name);
            $(cardHeaderEl).append(h2El);
            
            // $(h2El).append(spanEl);
            h2El  = $('<h2>').text(moment(obj[i].startTime.slice(0,16)).format('MM/DD'));
            $(cardHeaderEl).append(h2El);
           
            $(cardEl).append(cardHeaderEl);

            let cardContentEl = $('<div>').addClass('card-content');
            let pEl = $('<p>').addClass('temp');
            let iEl = $('<i>').addClass('fa-solid fa-temperature-empty');
            $(pEl).append(iEl);
            
            spanEl = $('<span>').text(obj[i].temperature + '°').css('margin-left','5px');
            $(pEl).append(spanEl);
            $(cardContentEl).append(pEl);

            pEl = $('<p>').addClass('wind').css('margin-top','7px').css('line-height','1');
            iEl = $('<i>').addClass('fa fa-wind');
            $(pEl).append(iEl);

            spanEl = $('<span>').text(obj[i].windSpeed).css('margin-left','5px');
            $(pEl).append(spanEl);
            $(cardContentEl).append(pEl);

            pEl = $('<p>').addClass('forecast').text(obj[i].shortForecast).css('margin-top','15px').css('line-height','1');
            $(cardContentEl).append(pEl);

            $(cardEl).append(cardContentEl);
            $(colEl).append(cardEl);
            $(cardContainerEl).append(colEl);
        }
    }
    $(weatherEl).append(cardContainerEl);
    $(boxEl).append(weatherEl);
    return boxEl;
}