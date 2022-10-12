<<<<<<< HEAD
// Crypto API
// https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets/?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel 
=======
// this gets the geolocation info of the user
var userObj = {
    name: '',
    city: '',
    latitude: '',
    longitude: ''
}

async function bigDataCloudApi(obj){
    let request = 'reverse-geocode-client';
    let resp = {};

    await fetch(`https://api.bigdatacloud.net/data/${request}`)
        .then(response => response.json())
        .then(response => {console.log(response); resp = response})
        .catch(err => console.error(err));

        obj.city = resp.city;    
        obj.latitude = resp.latitude;    
        obj.longitude = resp.longitude;  
}


async function aztroAPi(sign, day){
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
};

aztroAPi();

>>>>>>> aebd9c97791826ad6e9a79a1804a43c027bc1957
