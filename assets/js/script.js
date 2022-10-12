

var userObj = {
    name: 'Michael Nabatov',
    sign: 'aries'
}
// this gets the geolocation info of the user
// async function bigDataCloudApi(obj){
    //     let resp = {};
    //     let requests = ['clien-ip', 'client-info', 'reverse-geocode-client'];
    
    //     await fetch(`https://api.bigdatacloud.net/data/${requests[2]}`)
    //         .then(response => response)
    //         .then(response => {console.log(response); resp = response})
    //         .catch(err => {console.error(err); return err});
    
    //     obj.city = resp.city;    
    //     obj.latitude = resp.latitude;    
    //     obj.longitude = resp.longitude;  
    // }
    

async function aztroAPi(obj, sign, day){
    let resp = {};

    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '7e3d61519emsh748d639db16a48fp154cddjsn756669cf1b3e',
            'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
    };

    await fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`, options)
        .then(response => response.json())
        .then(response => {console.log(response); resp = response})
        .catch(err => {console.error(err); return err});

    obj.horoscope = resp;
};


async function punkApi(obj){
    let resp = {};

    await fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(response => {console.log(response); resp = response})
        .catch(err => {console.error(err); return err});
        
    obj.beerRecipes = resp;  // array of recipes
}

async function weatherGovApi(obj){
    let resp = {};

    let request = 'reverse-geocode-client';

    await fetch(`https://api.bigdatacloud.net/data/${request}`)
        .then(response => response.json())
        .then(response => {console.log(response); resp = response})
        .catch(err => {console.error(err); return err});
    
    obj.city = resp.city;    
    obj.latitude = resp.latitude;    
    obj.longitude = resp.longitude;  

    await fetch(`https://api.weather.gov/points/${resp.latitude},${resp.longitude}`)
        .then(response => response.json())
        .then(response => {console.log(response); resp = response})
        .catch(err => {console.error(err); return err});

    await fetch(resp.properties.forecast)
        .then(response => response.json())
        .then(response => {console.log(response); resp = response})
        .catch(err => {console.error(err); return err});
    
    obj.weather = resp.properties.periods;  // array 2 forecasts per day (i.e. day, night)
};


async function coinGeckoApi(obj){
    var coinsRequests = ['list','markets?vs_currency=usd']
    
    await fetch(`https://api.coingecko.com/api/v3/coins/${coinsRequests[1]}`)
        .then(response => response.json())
        .then(response => {console.log(response); resp = response})
        .catch(err => {console.error(err); return err});
    
    obj.crypto = resp;  // array
};



// bigDataCloudApi(userObj);
aztroAPi(userObj, userObj.sign, 'today');
punkApi(userObj);
weatherGovApi(userObj);
coinGeckoApi(userObj);




