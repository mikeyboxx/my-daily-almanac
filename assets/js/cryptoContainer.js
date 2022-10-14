var middle = $('#middle')

// let arr = resp.slice(0,15);    // take top 15 cryptos
//     obj.crypto = arr;  // array

function renderCrypto(obj){
    let containerEl = $('<div>');

    //Object 0 - Coin 1 of 15
    
    var pEl = $('<img>').attr("src", obj[0].image);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 1: ${obj[0].name}`);
    containerEl.append(pEl)

    pEl = $('<p>').text(`Crypto Coin 1: ${obj[0].market_cap_rank}`);
    containerEl.append(pEl)

    pEl = $('<p>').text(`Crypto Coin 1: ${obj[0].current_price}`);
    containerEl.append(pEl)

    El = $('<p>').text(`Crypto Coin 1: ${obj[0].price_change_24h}`);
    containerEl.append(pEl)
    
    //Object 1 - Coin 2 of 15
    
    pEl = $('<img>').attr("src", obj[1].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 2: ${obj[1].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 2: ${obj[1].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 2: ${obj[1].current_price}`);
    containerEl.append(pEl)
    
    El = $('<p>').text(`Crypto Coin 2: ${obj[1].price_change_24h}`);
    containerEl.append(pEl)

    //Object 2 - Coin 3 of 15
    
    pEl = $('<img>').attr("src", obj[2].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 3: ${obj[2].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 3: ${obj[2].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 3: ${obj[2].current_price}`);
    containerEl.append(pEl)
    
    El = $('<p>').text(`Crypto Coin 2: ${obj[2].price_change_24h}`);
    containerEl.append(pEl)    

    //Object 3 - Coin 4 of 15
    
    pEl = $('<img>').attr("src", obj[3].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 4: ${obj[3].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 4: ${obj[3].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 4: ${obj[3].current_price}`);
    containerEl.append(pEl)
    
    El = $('<p>').text(`Crypto Coin 4: ${obj[3].price_change_24h}`);
    containerEl.append(pEl)    

//Object 4 - Coin 5 of 15
    
pEl = $('<img>').attr("src", obj[4].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 5: ${obj[4].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Crypto Coin 5: ${obj[4].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Crypto Coin 5: ${obj[4].current_price}`);
containerEl.append(pEl)

El = $('<p>').text(`Crypto Coin 5: ${obj[4].price_change_24h}`);
containerEl.append(pEl) 

//Object 5 - Coin 6 of 15
    
pEl = $('<img>').attr("src", obj[5].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 6: ${obj[5].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Crypto Coin 6: ${obj[5].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Crypto Coin 6: ${obj[5].current_price}`);
containerEl.append(pEl)

El = $('<p>').text(`Crypto Coin 6: ${obj[5].price_change_24h}`);
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
    
    