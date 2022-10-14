var middle = $('#middle')

// let arr = resp.slice(0,15);    // take top 15 cryptos
//     obj.crypto = arr;  // array

function renderCrypto(obj){
    let containerEl = $('<div>');
    
    var  pEl = $('<img>').attr("src", obj[0].image);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 1: ${obj[0].name}`);
    containerEl.append(pEl)
    

    middle.append(containerEl)
}


fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderCrypto(data); 
        } )
        .catch(err => {console.error(err); return err});
    
    