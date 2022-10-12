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

