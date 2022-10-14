
// Crypto API
// https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel
// current day
// var currentDay = moment();
// if the date is in the past then user can only read notes
// when user click on edit button a text area will appear
// if it is present day then user can edit text
// User will have a save button to save to local storage
// $("#currentDay").text(currentDay.format("LLLL"));
// function dailyTime() {
//     $("#")

// need handler to save personal profile to object passed
// function renderWelcomeDialog(obj, fromContainer){
//     console.log(obj);

//     if (fromContainer === 'welcome') {
//         // came from Welcome Dialog box
//     }

//     if (fromContainer === 'preferences') {
//         // came from Edit Preferences Dialog box
//         // hide name and zodiac input
//     }
    

    // simulating save button assuming that below code will be executed by form button handler which will:
    // generate list of preferences from which you build checkboxes
    // generate list of zodiac signs, with text (dates), and icons (download and store in img dir or use Emojis)
    // generate list of favorite cuisines 
//     obj.name = 'Michael Nabatov';
//     obj.zodiacSign = 'aries';
//     obj.zodiacIcon = '♈︎';
//     obj.pet = 'dog';
//     obj.favoriteCuisine = 'italian';
//     obj.preferences = ['horoscope', 'weather', 'crypto', 'recipes', 'bored', 'cocktails']; 
    
//     // return obj;
//     // firstTimeRender(obj);
// }



// 
//function renderCrypto(obj){
//     console.log(obj);
// }

// function renderRecipes(obj){
//     console.log(obj);
// }

async function secondTimeRender(obj){
    console.log(obj);
}


async function firstTimeRender(obj){
    let resp = {};

    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '7e3d61519emsh748d639db16a48fp154cddjsn756669cf1b3e',
            'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
    };
    await fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${obj.zodiacSign}&day=today`, options)
        .then(response => response.json())
        .then(response => resp = response)
        .catch(err => {console.error(err); return err});
        
    obj.horoscope = resp;
    let horoscopeEl =  renderHoroscope(obj.horoscope);
    $('#middle').append(horoscopeEl);

    await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client`)
        .then(response => response.json())
        .then(response => resp = response)
        .catch(err => {console.error(err); return err});
    
    obj.city = resp.city;    
    obj.latitude = resp.latitude;    
    obj.longitude = resp.longitude;  

    await fetch(`https://api.weather.gov/points/${obj.latitude},${obj.longitude}`)
        .then(response => response.json())
        .then(response => resp = response)
        .catch(err => {console.error(err); return err});

    await fetch(resp.properties.forecast)
        .then(response => response.json())
        .then(response => resp = response)
        .catch(err => {console.error(err); return err});

    obj.weather = resp.properties.periods;  // array 2 forecasts per day (i.e. day, night)
    let weatherEl = renderWeather(obj.weather);
    $('#middle').append(weatherEl);
        
    await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
        .then(response => response.json())
        .then(response => resp = response)
        .catch(err => {console.error(err); return err});

    let arr = resp.slice(0,15);    // take top 15 cryptos
    obj.crypto = arr;  // array
    let cryptoEl = renderCrypto(obj.crypto);
    
    $('#middle').append(cryptoEl);
   



    // let apiKey = '81f0122781e2478fb85469f755df1399';
    // await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}&tags=${obj.favoriteCuisine}`)
    //     .then(response => response.json())
    //     .then(response => resp = response)
    //     .catch(err => {console.error(err); return err});
    
    // obj.recipes = resp.recipes;  // array
    
    // renderRecipes(obj);


    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(response => resp = response)
        .catch(err => {console.error(err); return err});
    // console.log(resp);
    obj.cocktail = resp;  // array
    
    let cocktailEl = renderCocktails(resp);
    $('#middle').append(cocktailEl);
    // save to local storage
    // localStorage.setItem('userObj', JSON.stringify(obj));
    renderTextPad(obj);
}


function start(){
    var userObj = JSON.parse(localStorage.getItem('userObj'));
    
    console.log('start');
    // first time
    console.log(userObj);
    if (userObj === null){
        userObj = {
            archivedNotes: []
        };
        renderWelcomeDialog(userObj, true);
        console.log(userObj);
        firstTimeRender(userObj);
        
    } else {
        renderWelcomeDialog(userObj);
        firstTimeRender(userObj);
    }

    return userObj;
}

var userObj = start();


// USER INTERACTIONS

// Welcome Dialog container
    // name: input text area
        // required
        // max 150 chars
    // favorite pet: dropdown list
        // limit them for now to cat, dog, or none
    // zodiac sign: dropdown list with date, text, icon
        // can be a global array with text, and icons
    // preferences: checkboxes (choices will be hardcoded for now) must be stored in global var
        // at least one must be selected
    // "Enter your personal almanac" save button  (need event handler/listener function for callback)
        // save name, fav pet, zodiac info, and an array of preferences in User Object
        // hide dialog
        // get all API data based on preferences
        // render all content sections based on preferences
        // save User Object in local storage

// Edit Preferences Dialog container
    // same as Welcome Dialog Box, except hide and exclude from logic name and zodiac
    // change name of button to "Save", display cancel/X button

// Content container
    // one box per api 
    // each box will be fixed width and height
    // one per preference
    // scroll to the right or left
    // scroll up and down within each preference content box

// Text Pad container (bottom of the page)
    // (text area is protected you cannot click on it)
    // will have a title (current date)
    // dropdown list of saved/archived dates of saved text items for viewing only (might appear in drop down menu also, maybe???)
        // read local storage to build list of dates
        // if date is selected show a Text Area Dialog box, showing the date and saved text (read only), with a close button (close button will hide this container)
    // click on Edit button 
        // Text Area Dialog box appears with editable text area, save button and cancel button

// Text Area Dialog box (triggered from clicked Edit button in Text Pad container)
    // click on Save button
        // save the text and date (pulled from moment.js - current date) in Archived list global array
        // save to local storage
    // click on Cancel button
        // hide the dialog box

// Menu container
    // click on Edit Preferences link
        // display Edit Preference Dialog container
    // click on Archived Texts link


    




