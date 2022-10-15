// made a for loop to populate data dynamically on top 10 crypto coins in a hardcoded table using bulma 
function renderCrypto(obj){
    var cryptoBodyElement = $('<tbody>').attr('id', 'crypto-body');
    let boxEl = $('<div>').addClass('column is-half');
    let containerEl = $('<div>').addClass('middle-box box');
    let tableEl = $('<table>').addClass('table is-striped');
    tableEl.attr('id', 'crypto-table');

    let trEl = $('<tr>');
    let thEl = $('<th>').text('Crypto ').css("padding-right", "1px");
    trEl.append(thEl);

    thEl = $('<th>').text('Coin');
    trEl.append(thEl);
    
    thEl = $('<th>').text('Current Market Price').css("text-align", "right");
    trEl.append(thEl);

    thEl = $('<th>').text('Price Change in Last 24hrs').css("text-align", "right");
    trEl.append(thEl);

    let theadEl = $('<thead>').append(trEl);
    tableEl.append(theadEl);

    var cryptoBodyElement = $('<tbody>').attr('id', 'crypto-body');

    for ( var i=0; i<10; i++){
        var tableRowElement = $("<tr>");
        
        var tableDataElement = $("<td>").append($('<img>').attr("src", obj[i].image));
        tableRowElement.append(tableDataElement);
       
        tableDataElement = $("<td>").text(obj[i].name);
        tableRowElement.append(tableDataElement);

        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(obj[i].current_price));
        tableDataElement = $("<td>").text(n).css("text-align", "right");
        tableRowElement.append(tableDataElement);
        
        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(obj[i].price_change_24h));
        tableDataElement = $("<td>").text(n).css("text-align", "right");
       
        tableRowElement.append(tableDataElement);
        cryptoBodyElement.append(tableRowElement);
    }

    tableEl.append(cryptoBodyElement);
    containerEl.append(tableEl);  
    boxEl.append(containerEl);  

    return boxEl;
 }

 async function cryptoRefresh(){
    await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
    .then(response => response.json())
    .then(response => resp = response)
    .catch(err => {console.error(err); return err});
    for (var i=0; i<10; i++){
        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(resp[i].current_price));
        $(`#coinPrice${i}`).text(n)
        console.log(n)
        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(resp[i].price_change_24h));
        $(`#coinPriceChange${i}`).text(n)
        
    }
    
}
// pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[9].price_change_24h}`);

    // middle.append(containerEl)




// fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             renderCrypto(data); 
//         } )
//         .catch(err => {console.error(err); return err});
    
    