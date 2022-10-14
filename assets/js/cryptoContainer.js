// var middle = $('#middle')

// let arr = resp.slice(0,15);    // take top 15 cryptos
//     obj.crypto = arr;  // array

function renderCrypto(obj){
    let boxEl = $('<div>').addClass('column  is-half');
    let containerEl = $('<div>').addClass('middle-box box ');

    //Object 0 - Coin 1 of 15
    
    var pEl = $('<img>').attr("src", obj[0].image);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 1: ${obj[0].name}`);
    containerEl.append(pEl)

    pEl = $('<p>').text(`Market Cap Rank: ${obj[0].market_cap_rank}`);
    containerEl.append(pEl)

    pEl = $('<p>').text(`Current Market Price: ${obj[0].current_price}`);
    containerEl.append(pEl)

    pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[0].price_change_24h}`);
    containerEl.append(pEl)
    
    //Object 1 - Coin 2 of 15
    
    pEl = $('<img>').attr("src", obj[1].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 2: ${obj[1].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Market Cap Rank: ${obj[1].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Current Market Price: ${obj[1].current_price}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[1].price_change_24h}`);
    containerEl.append(pEl)

    //Object 2 - Coin 3 of 15
    
    pEl = $('<img>').attr("src", obj[2].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 3: ${obj[2].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Market Cap Rank: ${obj[2].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Current Market Price: ${obj[2].current_price}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[2].price_change_24h}`);
    containerEl.append(pEl)    

    //Object 3 - Coin 4 of 15
    
    pEl = $('<img>').attr("src", obj[3].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 4: ${obj[3].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Market Cap Rank: ${obj[3].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Current Market Price: ${obj[3].current_price}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[3].price_change_24h}`);
    containerEl.append(pEl)    

//Object 4 - Coin 5 of 15
    
pEl = $('<img>').attr("src", obj[4].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 5: ${obj[4].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[4].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[4].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[4].price_change_24h}`);
containerEl.append(pEl) 

//Object 5 - Coin 6 of 15
    
pEl = $('<img>').attr("src", obj[5].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 6: ${obj[5].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[5].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[5].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[5].price_change_24h}`);
containerEl.append(pEl)   

//Object 6 - Coin 7 of 15
    
pEl = $('<img>').attr("src", obj[6].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 7: ${obj[6].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[6].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[6].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[6].price_change_24h}`);
containerEl.append(pEl)  

//Object 7 - Coin 8 of 15
    
pEl = $('<img>').attr("src", obj[7].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 8: ${obj[7].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[7].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[7].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[7].price_change_24h}`);
containerEl.append(pEl)  

//Object 8 - Coin 9 of 15
    
pEl = $('<img>').attr("src", obj[8].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 9: ${obj[8].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[8].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[8].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[8].price_change_24h}`);
containerEl.append(pEl)  

//Object 9 - Coin 10 of 15
    
pEl = $('<img>').attr("src", obj[9].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 10: ${obj[9].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[9].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[9].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[9].price_change_24h}`);
containerEl.append(pEl);  
boxEl.append(containerEl);  

    return boxEl;
    // middle.append(containerEl)
}



// fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             renderCrypto(data); 
//         } )
//         .catch(err => {console.error(err); return err});
    
    