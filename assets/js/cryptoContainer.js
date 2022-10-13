var middle = $('#middle')

// let arr = resp.slice(0,15);    // take top 15 cryptos
//     obj.crypto = arr;  // array

function renderCrypto(obj){
    console.log(obj);
    let containerEl = $('<div>');
    
    // var pEl = $('<p>').text(`Crypto Coin 1: $`)
    // var pEl = $('<p>').text(`Crypto Coin 2: $`)
    // var pEl = $('<p>').text(`Crypto Coin 3: $`)
    // var pEl = $('<p>').text(`Crypto Coin 4: $`)
    // var pEl = $('<p>').text(`Crypto Coin 5: $`)
    // var pEl = $('<p>').text(`Crypto Coin 6: $`)

    middle.append(containerEl)
}


fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderCrypto(arr); 
        } )
        .catch(err => {console.error(err); return err});
    
    