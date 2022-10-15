// get data from various APIs based on user preferences selected, attach response to global object and render the corresponding page sections
async function getApiDataAndRender(obj){
    let resp = {};
    $('#middle').empty();  // empty out the html content before generating

    // if horocope preference exists then get api data and render page
    if (obj.preferences.findIndex((el)=>el === 'horoscope') !== -1){
        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': '7e3d61519emsh748d639db16a48fp154cddjsn756669cf1b3e',
                'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
            }
        };
        await fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${obj.zodiacSign}&day=today`, options)
            .then(response => response.json())
            .then(response => {
                    resp = response;
                    obj.horoscope = resp;  // attach response to global object
                    let horoscopeEl =  renderHoroscope(obj);  // render html section
                    $('#middle').append(horoscopeEl);    // append to middle container
                })
            .catch(err => {console.error(err); return err});
    }
    // if weather preference exists then get geolocation api data, and use that to get the weather forecast 
    if (obj.preferences.findIndex((el)=>el === 'weather') !== -1){    
        await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client`)
            .then(response => response.json())
            .then(response => {
                resp = response;
                obj.city = resp.city;    
                obj.latitude = resp.latitude;    
                obj.longitude = resp.longitude; 
            })
            .catch(err => {console.error(err); return err});

        await fetch(`https://api.weather.gov/points/${obj.latitude},${obj.longitude}`)
            .then(response => response.json())
            .then(response => resp = response)
            .catch(err => {console.error(err); return err});
        
        if (resp.properties.forecast) {    
            await fetch(resp.properties.forecast)
                .then(response => response.json())
                .then(response =>  {
                    resp = response;
                    obj.weather = resp.properties.periods;  // array 2 forecasts per day (i.e. day, night)
                    let weatherEl = renderWeather(obj.weather);
                    $('#middle').append(weatherEl);
                })
                .catch(err => {console.error(err); return err});
        }
    }
     
    if (obj.preferences.findIndex((el)=>el === 'crypto') !== -1){
        await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
            .then(response => response.json())
            .then(response =>  {
                resp = response;
                let arr = resp.slice(0,15);    // take top 15 cryptos
                obj.crypto = arr;  // array
                let cryptoEl = renderCrypto(obj.crypto);
                $('#middle').append(cryptoEl);
            })
            .catch(err => {console.error(err); return err});
    }
    
    if (obj.preferences.findIndex((el)=>el === 'cocktail') !== -1){
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then(response =>  {
                resp = response;
                obj.cocktail = resp;  // array
                let cocktailEl = renderCocktails(resp);
                $('#middle').append(cocktailEl);
            })
            .catch(err => {console.error(err); return err});
    }

    localStorage.setItem('userObj', JSON.stringify(obj));
}

// inital function to do the work
function start(){
    let userObj = JSON.parse(localStorage.getItem('userObj'));
    // first time
    if (userObj === null){
        // this is hardcoded to simulate prior text pad entries
        userObj = {
            archivedNotes: [
                {
                    date: 'Oct 1st, 2022',
                    text: `RANDOM THOUGHTS – WHAT EXACTLY ARE THEY?
                    Random thoughts are those thoughts that appear out of nowhere and quite unexpectedly. At one point you are watching a movie or talking to a friend, while at another you have already entered another dimension trying to give yourself an answer to a completely random question.
                    
                    The human brain is programmed so that it cannot stop thinking. At all times, the brain works diligently and can surprise you in which direction he can go.
                    
                    Random thoughts often have nothing to do with a particular situation you are in. Random thoughts just appear and like a bird on a branch, land in your brain. Often like birds, they fly away quickly but leave behind more silly new topics to think about.`
                },
                {
                    date: 'Oct 3rd, 2022',
                    text: `WHY DO RANDOM THOUGHTS “ATTACK” OUR BRAINS?
                    No rules. Given that the human brain functions amazingly and that we can’t always determine what we will think about, random thoughts can appear quite by accident, when we least expect them.
                    
                    On the other hand, random thoughts can appear as a result of creativity or solving a certain problem. When we remove all obstacles and let our creativity live, our brain is free of all barriers and works in the craziest way possible. When we are in a certain problem, we will often think too much to find a solution to the problem. That is why, random thoughts, no matter how unnecessary they may seem, can help expand our horizons.
                    
                    Random thoughts are completely normal and it is perfectly fine to embrace those strange thoughts that occupy our attention.
                    
                    Every brain functions differently and every human being is unique in its way, but we will present you with 100 random thoughts, at least some of which must have lived rent-free in your brain.`
                },
                {
                    date: 'Oct 5th, 2022',
                    text: `Have you ever happened to disconnect from reality, while your strange and incomprehensible thoughts are floating all around? That feeling when you stare at one point on the wall and you are present with your body, but with your soul and thoughts, you are somewhere completely different. How strange it is how, all of a sudden, our brains are occupied by some completely crazy thoughts, which make our brains explode. Don’t worry, it happens to everyone! Our brain is very complex and all those strange thoughts that appear out of nowhere are called random thoughts.`
                },
                {
                    date: 'Oct 10th, 2022',
                    text: `RANDOM THOUGHTS DURING THE SHOWER
                    1. The scream in your head will never be out of breath.
                    
                    2. Do fish in water have their hidden life where they go to school, hang out, study, and get married?
                    
                    3. If everyone had roller skates instead of feet, would there be cars or would they go rollerblading everywhere?
                    
                    4. We will never know what memories we had as children and we will never remember them.
                    
                    5. We know our parents for whole our life, while they know us only part of their lives.
                    
                    6. Someone was born at this very moment, and someone lost his life at this very moment.`
                },
                {
                    date: 'Oct 12th, 2022',
                    text: `RANDOM LOVE THOUGHTS
                    16. It is very important to have someone who lets you be what you are and nourishes your mind and your soul, not your ego.
                    
                    17. What would happen to us without love? We would not be beings who feel and live for love, we would be just a mere and quiet existence.
                    
                    18. It is better to be alone and happy in the four walls of your head than to suffer someone’s disrespect, just because you are afraid of loneliness.`
                }
            ]
        };
        renderWelcomeDialog(userObj, true);
        renderTextPad(userObj);
    } else {
        renderWelcomeDialog(userObj, false);
        renderTextPad(userObj);
        getApiDataAndRender(userObj);
    }
}

start();
